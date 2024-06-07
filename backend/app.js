const express = require('express');
const app = express();
const logger = require('morgan');
require('dotenv').config();
require('./db');
const PORT = process.env.PORT || 4528;


app.use(logger('dev'));
app.use(express.json());



// app.listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });