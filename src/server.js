const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./Database/db')
const userRoutes = require('./Routes/userRoutes')
require('dotenv').config();
app.use(cors());
connectDB();
app.use(express.json())


app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server running  On : http://localhost:${PORT}`);
})