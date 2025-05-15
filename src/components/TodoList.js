import React, { useState } from 'react';
import TodoForm from './TodoForm'; //This import is where we do the formulary and the section to add tasks.
import Todo from './Todo'; //This import represents a single task in the list.

function TodoList() { //The principal function of the list of tasks.
  // The useState hook is used to manage the state of the todos.
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => { //This function is used to add a new task to the list at the beggining of the array.
    setTodos([todo, ...todos]);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos]; //creates a copy of the current todos array
    newTodos[index].isComplete = !newTodos[index].isComplete; //changes the state of the task to complete or not
    setTodos(newTodos); //updates the state with the new todos array
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>What am I doing today?</h1>
      <TodoForm onSubmit={addTodo} /> 
      {todos.map((todo, index) => (
        <Todo
          key={todo.id}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;