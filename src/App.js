import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app-container">
      <TodoList />
    </div>
  );
}

export default App; //This allows you to import and use this component in another file (such as in a main task list component).
