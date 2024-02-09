// App.js
import React, { useState } from 'react';

const App = () => {
  // newTask is whatever the user typed up
  const [newTask, setNewTask] = useState('');
  // todoList is an array with tasks objects where each obj has properties:
  // [{task1}, {task2}], where task1 = {id:"1", task:"finish work", completionStatus:"false"}
  const [todoList, setTodoList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  function handleAddTask(event){
    setNewTask(event.target.value)
  }

  function addTask(){
    if(newTask!=''){
      const currentTime = new Date(); 
      setTodoList([...todoList, {id:currentTime, task: newTask, completionStatus: false}]);
      setNewTask('');
    }
  }
  function deleteTask(itemID){
    const updatedTodoList = todoList.filter(item => item.id !== itemID);
    setTodoList(updatedTodoList);
  }
  function handleCheckBox(){

  }

  return (
    <div>
      <h1>My Todo List</h1>
      <div>
        <ul>
          <li>
            <input type='text' value={newTask} onChange={handleAddTask} />
            <button onClick={addTask}>Add</button>
            {todoList.map(item => (
              <div>
                <input type='checkbox' checked={isChecked} onChange={handleCheckBox}></input>
                <li key={item.id} style={{display:'inline-block', marginRight: '5px'}}> {item.task}</li>
                <button onClick={() => deleteTask(item.id)}> Delete </button>
              </div>
            ))}
          </li>
        </ul>
      </div>

    </div>
  );
};

export default App;
