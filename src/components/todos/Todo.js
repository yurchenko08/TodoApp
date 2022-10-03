import React from "react";
import { RiTodoFill } from "react-icons/ri";
import style from "./Todo.module.css";
export default function Todo({ todo, index, deleteTodo }) {
  return (
    <div onDoubleClick={() => deleteTodo(index)} className={style.todo}>
      <RiTodoFill className={style.todoIcon} />
      <div className={style.todoText}>{todo}</div>
    </div>
  );
}
