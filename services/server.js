const dotenv = require('dotenv');
dotenv.config({path: './config.env'}); 


const connectDB = require('./utils/connectDB');
const app = require('./app');
connectDB();

const server = app.listen(process.env.PORT, () => console.log(`Blog API is running on port ${process.env.PORT}...`));
