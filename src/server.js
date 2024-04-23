const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./Database/db')
require('dotenv').config();
app.use(cors());
connectDB();





const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server running  On : http://localhost:${PORT}`);
})