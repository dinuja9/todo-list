// App.js
import React, { useState } from 'react';
import TodoItem from './TodoItem.js'

const App = () => {
  const [newTask, setNewTask] = useState('');
  const [todoList, setTodoList] = useState([]);

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
  const handleCheckBox = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].completionStatus = !updatedTodoList[index].completionStatus;  
    setTodoList(updatedTodoList);
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <div>
        <ul>
          <li>
            <input type='text' value={newTask} onChange={handleAddTask} />
            <button onClick={addTask}>Add</button>
            {todoList.map((item, index) => (
              <TodoItem handleCheckBox={handleCheckBox} deleteTask={deleteTask} item={item} index={index}/>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;