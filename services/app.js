const express = require('express');
const morgan = require('morgan');
const app = express();
const errorController = require('./controller/errorController');

app.use(express.json({limit: '10kb'}));
if (process.env.NODE_ENV === 'DEV') app.use(morgan('dev'));

const postRouter = require('./router/postRouter');
app.use(`${process.env.API_PATH}/posts`, postRouter);

app.all('*', (req, res, next) => next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404)));
app.use(errorController);

module.exports = app;
