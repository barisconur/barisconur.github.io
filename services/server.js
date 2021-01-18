const express = require('express');
const app = express();
const connectDB = require('./utils/connectDB');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' }); 

connectDB();

const server = app.listen(process.env.PORT, () => console.log(`Blog API is running on port ${process.env.PORT}...`));