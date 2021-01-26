const AppError = require('../utils/appError');
const catchAsyncErr = require('../utils/catchAsyncErr');
const jwtToken = require('../utils/jwtToken');

exports.protect = catchAsyncErr(async (req, res, next) => {
  let token;
  const { authorization } = req.headers;

  if (authorization && authorization.startsWith('Bearer')) token = authorization.split(' ')[1];

  if (!token) next(new AppError('You are not logged in. Please login to get access'));
  
  next();
});

exports.login = catchAsyncErr(async (req, res) => {
  if (process.env.JWT_SECRET === req.body.secret) {
    jwtToken.createSendToken(res);
  } else {
    return next(new AppError('You are not admin', 403));
  }
}); 