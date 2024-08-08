const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.authenticateJWT = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).send('Access denied');

  try {
    const decoded = jwt.verify(token, 'jwt_secret');
    req.user = await User.findById(decoded.id);
    if (!req.user) throw new Error();
    next();
  } catch (error) {
    res.status(401).send('Invalid token');
  }
};
