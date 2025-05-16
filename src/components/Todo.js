import React from "react";
import { RiCloseCircleLine, RiCheckboxCircleLine } from "react-icons/ri"; //Importing react icons - RiCloseCircleLine: icon to delete a task & RiCheckboxCircleLine: icon to mark a task as completed.
import "./Todo.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className={todo.isComplete ? "todo-row complete" : "todo-row"}>
      {/*  if todo.isComplete applies todo-row complete which it will be modified with CSS Todo.css and if not just only with todo-row.*/}
      <div className="text">
        {" "}
        {/* Shows the text of the task */}
        {todo.text} {/*It is the content of the object todo. */}
      </div>
      <div className="actions">
        {" "}
        {/*Shows the icons.*/}
        <RiCheckboxCircleLine
          onClick={() => completeTodo(index)} //When clicked, it calls the completeTodo(index) function, passing the task index.
          className="complete-icon"
        />
        <RiCloseCircleLine
          onClick={() => removeTodo(index)} //When clicked, it calls the removeTodo(index) function, passing the task index.
          className="delete-icon"
        />
      </div>
    </div>
  );
}

export default Todo; //This allows you to import and use this component in another file (such as in a main task list component).
