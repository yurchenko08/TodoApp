import React from "react";
import Todo from "./Todo";
function TodoList({ todos, deleteTodo }) {
  return (
    <>
      {!todos.length && <h3>Todo list is empty</h3>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </>
  );
}
export default TodoList;
