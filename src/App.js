import { useState } from "react";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todos/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };
  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((value, idx) => idx != index));
  };

  return (
    <div className='App'>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
