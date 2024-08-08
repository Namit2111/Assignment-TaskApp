const express = require('express');
const { createTask, updateTask, deleteTask, markTaskCompleted, getTasks } = require('../controllers/taskController');

const router = express.Router();

router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.patch('/:id/completed', markTaskCompleted);
router.get('/', getTasks);

module.exports = router;
