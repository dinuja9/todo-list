import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { id: todos.length + 1, task, completed: false }]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
