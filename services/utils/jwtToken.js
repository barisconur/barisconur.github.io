const jwt = require('jsonwebtoken');

const generateToken = () => jwt.sign(process.env.JWT_PAYLOAD, process.env.JWT_SECRET);

module.exports.createSendToken = (res) => {
  const token = generateToken();
  const cookieOptions = {
    httpOnly: true, 
  };

  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
  
  res.cookie('token', token, cookieOptions);

  res.status(200).json({
    status: 'success',
    token,
  });
};