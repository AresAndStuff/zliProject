import { useState } from "react";
export const useTodos = (initialValue = []) => {
  const [todos, setTodos] = useState(initialValue);
  return {
    todos,
    onloadTasks: (tasks) => {
      todos = tasks;
    },
    addTodo: (text) => {
      if (text !== "") {
        setTodos(
          todos.concat({
            title: text,
            completed: false,
          })
        );
      }
    },
    checkTodo: (idx) => {
      setTodos(
        todos.map((todo, index) => {
          if (idx === index) {
            todo.checked = !todo.checked;
          }
          return todo;
        })
      );
    },
    removeTodo: (idx) => {
      setTodos(todos.filter((todo, index) => idx !== index));
    },
  };
};
