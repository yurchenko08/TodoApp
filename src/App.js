import { useState } from "react";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todos/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };

  return (
    <div className='App'>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
