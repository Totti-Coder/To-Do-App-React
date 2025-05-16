import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(""); //Creates a const input with the valor of an empty string and a function to update the text.

  const handleChange = (e) => {
    //This function executes whenever someone writes something in the input.
    setInput(e.target.value); //Updates the state of the text.
  };

  const handleSubmit = (e) => {
    //This function is executed when the form is submitted (by clicking the "Add" button or pressing Enter).
    e.preventDefault(); // Preventes from recharging the page.

    if (!input.trim()) return; // If the input is empty or only contains spaces, it does nothing and exits the function.
    props.onSubmit({
      // Adds a new task.
      id: Math.floor(Math.random() * 10000), //gives a random id number to the new task.
      text: input.trim(), // el texto escrito, sin espacios al inicio ni al final.

      isComplete: false, // Starts as false (the task is not yet completed).
    });
    setInput(""); // After adding a new task, empty the input field.
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add a todo"
        value={input}
        onChange={handleChange}
      />
      <button className="todo-button">Add</button>
    </form>
  );
}

export default TodoForm; //This allows you to import and use this component in another file (such as in a main task list component).
