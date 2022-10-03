import React from "react";
export default function Todo({ todo, index, deleteTodo }) {
  return (
    <div onDoubleClick={() => deleteTodo(index)}>
      <div>{todo}</div>
    </div>
  );
}
