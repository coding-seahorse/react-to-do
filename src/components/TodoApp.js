import TodoForm from '../components/TodoForm.js';
import Todo from '../components/Todo.js';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

export default function TodoApp() {

  const [todos, setTodos] = useState(() => localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

  const [theme, setTheme] = useState("light");


  const getPriority = todo => {

    if (todo.priority === "High") return "high";
    else if (todo.priority === "Medium") return "medium";
    else if (todo.priority === "Low") return "low";
    else return "";
  }


  const toggleTheme = () => {

    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");

    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  }


  useEffect(() => { if (localStorage.getItem("theme") === "dark") setTheme(localStorage.getItem("theme")) });


  useEffect(() => localStorage.setItem("todos", JSON.stringify(todos)), [todos]);


  return (
    <div className={`theme-wrapper ${theme === 'light' ? "" : "dark-theme"}`}>
      <div className="todo-container">
        <div className="top-wrapper">
          <div className="account">
            <FontAwesomeIcon icon={faUser} />
            <p className='p-account'>{localStorage.getItem('#')}</p>
          </div>
          <h1> To-do</h1>
          <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className="moon-icon" onClick={toggleTheme} />
        </div>
        <TodoForm
          todos={todos}
          setTodos={setTodos}
        />

        <Todo
          todos={todos}
          setTodos={setTodos}
          getPriority={getPriority}

        />
      </div>
    </div>
  )
}