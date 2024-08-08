import React from 'react';
import axios from 'axios';
import "./task.css";
const Task = ({ task, setTasks, tasks }) => {
  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`/api/tasks/${task._id}`, { status: 'completed' }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(tasks.map(t => (t._id === task._id ? response.data : t)));
    } catch (error) {
      console.error('Failed to update task');
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/api/tasks/${task._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(tasks.filter(t => t._id !== task._id));
    } catch (error) {
      console.error('Failed to delete task');
    }
  };

  return (
    <li className="task-item">
      <span className="task-name">{task.name}</span>
      <span className="task-status">{task.status}</span>
      {task.status === 'pending' && <button className="task-button complete-button" onClick={handleUpdate}>Complete</button>}
      <button className="task-button delete-button" onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Task;
