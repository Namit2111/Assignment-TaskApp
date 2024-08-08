const Task = require('../models/task');

exports.createTask = async (req, res) => {
  try {
    const { name } = req.body;
    const task = new Task({ name, user: req.user.id });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.send('Task deleted');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.markTaskCompleted = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, { status: 'completed' }, { new: true });
    res.json(task);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getTasks = async (req, res) => {
  try {
    const { status, search } = req.query;
    const query = { user: req.user.id };
    if (status) query.status = status;
    if (search) query.name = { $regex: search, $options: 'i' };
    const tasks = await Task.find(query);
    res.json(tasks);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
