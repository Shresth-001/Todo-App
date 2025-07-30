import { useEffect, useState } from "react";

function getintialTodos() {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  }
  return [];
}

function useTodos() {
  const [todos, settodos] = useState(getintialTodos);
  const [count, setCount] = useState(0);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (data) => {
    console.log(data)
    if (data.trim() === "") return;
    settodos((prevTodos) => [
      { id: count, text: data, done: false },...prevTodos
    ]);
    setCount(prevCount=>prevCount + 1);
  };

  const deleteTodo = (id) => {
    settodos((prevTodos) => prevTodos.filter((item) => item.id != id));
  };

  const updateTodo = (nextTodos) => {
    settodos(
      todos.map((item) => {
        if (item.id === nextTodos.id) {
          return nextTodos;
        } else {
          return item;
        }
      })
    );
  };
  const clearComplete = () => {
    settodos((prevTodos) => prevTodos.filter((item) => !item.done));
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
    clearComplete
  };
}
export default useTodos;
