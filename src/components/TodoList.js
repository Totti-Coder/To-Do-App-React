import React, { useState } from "react";
import TodoForm from "./TodoForm"; //This import is where we do the formulary and the section to add tasks.
import Todo from "./Todo"; //This import represents a single task in the list.

function TodoList() {
  //The principal function of the list of tasks.
  // The useState hook is used to manage the state of the todos.
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    //This function is used to add a new task to the list at the beggining of the array.
    setTodos([todo, ...todos]);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos]; //creates a copy of the current todos array
    newTodos[index].isComplete = !newTodos[index].isComplete; //changes the state of the task to complete or not
    setTodos(newTodos); //updates the state with the new todos array
  };

  // This function removes a task from the task list, using its index.
  const removeTodo = (index) => {
    // We use .filter() to create a new array without the task at position 'index'
    // (_) represents the current value (which we don't use), and 'i' is the index of that element.
    // Only tasks whose index is NOT equal to the one we want to delete are kept.
    const newTodos = todos.filter((todo, i) => i !== index);
    // Update the state of 'todos' with the new array.
    // This causes React to re-render the list without the deleted task.
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>What am I doing today?</h1>
      <TodoForm onSubmit={addTodo} />
      {todos.map((todo, index) => (
        <Todo
          key={todo.id} //React needs a unique key for each item in a list in order to render them efficiently.
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
}

export default TodoList; //This allows you to import and use this component in another file (such as in a main task list component).
