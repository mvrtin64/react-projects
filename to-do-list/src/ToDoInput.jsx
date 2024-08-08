import React, { useState } from 'react';
import './css/ToDoInput.css'

function Input({addTask}) {    // function receives a prop 
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className="input-container">
    <h2>Input a new task</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New Task"
      />
      <button type="submit">Add new task</button>
    </form>
  </div>
);
}

export default Input