import React, { useState } from 'react';

const TodoItem = ({handleCheckBox, deleteTask, item, index}) => {
    return (
      <div style={{display:'flex', marginTop: '10px'}}>
        <input type='checkbox' checked={item.completionStatus} onChange={() => handleCheckBox(index)}></input>
        <span style={{textDecoration: item.completionStatus ? 'line-through' : 'none', marginRight: '5px'}}>
          {item.task}
        </span>
        <button onClick={() => deleteTask(item.id)}> Delete </button>
      </div>
    );
};

export default TodoItem;