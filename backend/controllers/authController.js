const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    console.log(user);
    await user.save();
    res.status(201).send('User registered');
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id }, 'your_jwt_secret');
    res.json({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
