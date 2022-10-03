import React from "react";
import Todo from "./Todo";
function TodoList({ todos }) {
  return (
    <>
      {todos.length === 0 && <h3>Todo list is empty</h3>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </>
  );
}
export default TodoList;
