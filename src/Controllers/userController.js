const validator = require('validator');
const bcrypt = require('bcrypt');
const User = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

// Function to generate JWT token
const generateToken = (email) => {
    return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Function to set JWT token as a cookie
const setCookie = (res, token) => {
    res.setHeader('Set-Cookie', cookie.serialize('token', token, {
        httpOnly: true,
        maxAge: 3600, // 1 hour in seconds
        sameSite: 'lax', // Change to 'strict' if needed
        secure: process.env.NODE_ENV === 'production' // Set secure flag for HTTPS in production
    }));
};

// POST || /api/user/create
exports.createUser = async (req, res) => {
    try {
        // Extract username, email, and password from request body
        const { username, email, password } = req.body;

        // Validate username, email, and password presence
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Please provide username, email, and password' });
        }

        // Validate username is a string
        if (typeof username !== 'string') {
            return res.status(400).json({ message: 'Username must be a string' });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        // Validate password is a string
        if (typeof password !== 'string') {
            return res.status(400).json({ message: 'Password must be a string' });
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        // Save the new user to the database
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST /api/user/login
exports.loginUser = async (req, res) => {
    try {
        const email = req.body.Email;
        const password = req.body.password;

        // Validate email and password
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide email and password' });
        }

        // Check if user with the provided email exists
        const user = await User.findOne({ email });
        console.log(user)
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare the provided password with the hashed password stored in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = generateToken(email);

        // Set JWT token as a cookie in the response
        setCookie(res, token);

        // Return a success message along with the token
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
