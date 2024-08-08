import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from '../components/Task';
import "./dashboard.css"
const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchTasks();
  }, [status, search]);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/tasks', {
        headers: { Authorization: `Bearer ${token}` },
        params: { status, search },
      });
      setTasks(response.data);
    } catch (error) {
      console.error('Failed to fetch tasks');
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/tasks', { name }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks([...tasks, response.data]);
      setName('');
    } catch (error) {
      console.error('Failed to create task');
    }
  };

  return (
    <div className="dashboard">
      <form className="create-task-form" onSubmit={handleCreate}>
        <input 
          className="input-task-name" 
          type="text" 
          placeholder="Task Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <button className="create-task-button" type="submit">Create Task</button>
      </form>
      <input 
        className="search-tasks" 
        type="text" 
        placeholder="Search Tasks" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <select className="filter-status" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <ul className="task-list">
        {tasks.map(task => (
          <Task key={task._id} task={task} setTasks={setTasks} tasks={tasks} />
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
