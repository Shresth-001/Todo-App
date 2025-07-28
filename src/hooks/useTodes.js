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

  const addTodes = (text) => {
    console.log(text)
    if (text.trim() === "") return;
    settodos((prevTodes) => [
      { id: count, todo: text, done: false },...prevTodes
    ]);
    setCount(count + 1);
  };

  const deleteTodo = (id) => {
    settodos((prevTodes) => prevTodes.filter((item) => item.id != id));
  };

  return {
    todos,
    addTodes,
    deleteTodo
  };
}
export default useTodes;
