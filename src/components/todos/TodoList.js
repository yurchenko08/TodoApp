import React from "react";
import Todo from "./Todo";
import style from "./TodoList.module.css";
function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={style.todoListContainer}>
      {!todos.length && <h3>Todo list is empty</h3>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}
export default TodoList;
