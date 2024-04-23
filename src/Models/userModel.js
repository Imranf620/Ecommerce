// Import Mongoose
const mongoose = require('mongoose');

// Define a schema for the user model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    
}, {
    timestamps: true
});

// Create a User model using the schema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
