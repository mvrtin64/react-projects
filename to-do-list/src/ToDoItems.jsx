import React from "react";
import './css/ToDoItems.css'

function Items({ task, index, removeTask, toggleTask}){
  return (
    <li className="todo-item">
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(index)}
        />
        <span className={task.completed ? "task-text completed" : "task-text"}>
          {task.text}
        </span>
      </div>
      <button onClick={() => removeTask(index)}>Delete</button>
    </li>
  );
}

export default Items