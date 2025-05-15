import React, { useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input.trim(),
      isComplete: false,
    });
    setInput('');
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

export default TodoForm;