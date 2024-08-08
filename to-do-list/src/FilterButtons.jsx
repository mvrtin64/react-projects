import React from "react";

function FilterButtons({handleFilterChange}){
  return(
    <div className="filter-buttons">
    <button onClick={() => handleFilterChange('all')}>All</button>
    <button onClick={() => handleFilterChange('done')}>Done</button>
    <button onClick={() => handleFilterChange('todo')}>To Do</button>
  </div>
  );
}

export default FilterButtons
