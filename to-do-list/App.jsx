import React, { useState, useEffect } from 'react';
import './css/App.css'
import Input from './src/ToDoInput'
import List from './src/ToDoList'
import ActionButtons from './src/ActionButtons'
import FilterButtons from './src/FilterButtons'

function App() {
  const getInitialTasks = () => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  };

  const [tasks, setTasks] = useState(getInitialTasks); // initialize state with stored tasks or empty array
  const [filter, setFilter] = useState('all'); // initial state 


   useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  // props initialization 

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const deleteCompletedTasks = () => {
    const newTasks = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const getFilteredTasks = () => {
    if (filter === 'todo') {
      return tasks.filter(task => !task.completed);
    }
    if (filter === 'done') {
      return tasks.filter(task => task.completed);
    }
    return tasks; 
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <>
      <Input addTask={addTask} />        {/*  function passed as prop to the component   */}
      <FilterButtons handleFilterChange={handleFilterChange}/>
      <List tasks={getFilteredTasks()} filter={filter} toggleTask={toggleTask} removeTask={removeTask}/>
      <ActionButtons deleteCompletedTasks={deleteCompletedTasks} deleteAllTasks={deleteAllTasks} />
    </>
  );
}

export default App;