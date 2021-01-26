const express = require('express');
const morgan = require('morgan');

const app = express();

const AppError = require('./utils/appError');
const errorController = require('./controller/errorController');

app.use(express.json({limit: '10kb'}));
if (process.env.NODE_ENV === 'dev') app.use(morgan('dev'));

const postRouter = require('./router/postRouter');
const commentRouter = require('./router/commentRouter');
const adminRouter = require('./router/adminRouter');

app.use(`${process.env.API_PATH}/posts`, postRouter);
app.use(`${process.env.API_PATH}/comments`, commentRouter);
app.use(`${process.env.API_PATH}/leningrad`, adminRouter);

app.all('*', (req, res, next) => next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404)));
app.use(errorController);

module.exports = app;
