import React from "react";

function ActionButtons({deleteAllTasks, deleteCompletedTasks}){
  return (
    <div className="action-buttons">
    <button onClick={deleteCompletedTasks}>Delete done tasks</button>
    <button onClick={deleteAllTasks}>Delete all tasks</button>
  </div>
  );
}

export default ActionButtons