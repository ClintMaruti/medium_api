const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// Connect to the database
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connected to the database!')
    );

// Listen to the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port} ...`));