import { useEffect, useState } from "react";

function getintialTodes() {
  const savedTodes = localStorage.getItem("todes");
  if (savedTodes) {
    return JSON.parse(savedTodes);
  }
  return [];
}

function useTodes() {
  const [todos, settodos] = useState(getintialTodes);
  const [count, setCount] = useState(0);
  useEffect(() => {
    localStorage.setItem("todes", JSON.stringify(todos));
  }, [todos]);

  const addTodes = (data) => {
    console.log(data)
    if (data.trim() === "") return;
    settodos((prevTodes) => [
      { id: count, text: data, done: false },...prevTodes
    ]);
    setCount(prevCount=>prevCount + 1);
  };

  const deleteTodo = (id) => {
    settodos((prevTodes) => prevTodes.filter((item) => item.id != id));
  };

  const updateTode = (nextTodes) => {
    settodos(
      todos.map((item) => {
        if (item.id === nextTodes.id) {
          return nextTodes;
        } else {
          return item;
        }
      })
    );
  };
  const clearComplete = () => {
    settodos((prevTodes) => prevTodes.filter((item) => !item.done));
  };

  return {
    todos,
    addTodes,
    deleteTodo,
    updateTode,
    clearComplete
  };
}
export default useTodes;
