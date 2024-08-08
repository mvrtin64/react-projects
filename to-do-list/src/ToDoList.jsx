import React from 'react';
import Items from './ToDoItems' 

function List({ tasks , removeTask, toggleTask}){  // props received 
  return (
    <div className="todo-list">
    <h2>To-Do Tasks</h2>
    <ul>
        {tasks.map((task, index) => (
          <Items
            key={index}
            task={task}
            index={index}
            removeTask={removeTask}
            toggleTask={toggleTask}
          />
        ))}
      </ul>
  </div>
  );
}

export default List