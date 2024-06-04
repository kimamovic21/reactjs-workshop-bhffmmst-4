import { useEffect, useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTask = () => {
    if (!inputValue) {
      alert("Please enter a valid task!");
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      task: inputValue,
      completed: false,
    };

    console.log(newTodo);
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDeleteTodo = (deleteId) => {
    const newTodos = todos.filter((todo) => todo.id !== deleteId);
    setTodos(newTodos);
  };

  const toggleTodoCompletion = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h2>To Do List</h2>
      <div className="row-add-task">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-list">
        {todos.map((todo) => {
          return (
            <div
              className={`task-row ${todo.completed ? "completed" : ""}`}
              key={todo.id}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodoCompletion(todo.id)}
              />
              <div
                className="task-text"
                onClick={() => toggleTodoCompletion(todo.id)}
              >
                {todo.task}
              </div>
              <button
                className="delete-btn"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ToDoList;
