import React from 'react';
import { RiCloseCircleLine, RiCheckboxCircleLine } from 'react-icons/ri';
import './Todo.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
      <div className="text">
        {todo.text}
      </div>
      <div className="actions">
        <RiCheckboxCircleLine
          onClick={() => completeTodo(index)}
          className="complete-icon"
        />
        <RiCloseCircleLine
          onClick={() => removeTodo(index)}
          className="delete-icon"
        />
      </div>
    </div>
  );
}

export default Todo;