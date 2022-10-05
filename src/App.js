import { useState } from "react";
import TodoForm from "./components/todoForm/TodoForm";
import TodoList from "./components/todos/TodoList";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TodosActions from "./components/todos/TodosActions";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = { text: text, isCompleted: false, id: uuidv4() };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  return (
    <div className='App'>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      <div style={{ fontSize: 25, fontWeight: 700 }}>
        {!!todos.length && <h3>You have ${todos.length} todos</h3>}
      </div>
    </div>
  );
}

export default App;
