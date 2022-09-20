import React, { memo, useEffect } from "react";
import { useTodos } from "../hooks/useTodos";
import { useInputValue } from "../hooks/useInputValue";
import Layout from "../components/Layout";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { getTasks } from "../api/taskApiProvider";

const TodoApp = memo((props) => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, onloadTasks, addTodo, checkTodo, removeTodo } = useTodos();
  const clearInputAndAddTodo = (_) => {
    addTodo(inputValue);
    clearInput();
  };
  useEffect(() => {
    getTasks().then((tasks) => {
      onloadTasks(tasks);
    });
  }, []);
  return (
    <Layout>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={(event) => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList
        items={todos}
        onItemCheck={(idx) => checkTodo(idx)}
        onItemRemove={(idx) => removeTodo(idx)}
      />
    </Layout>
  );
});
export default TodoApp;
