import React, { useEffect, useMemo, useState } from "react";
import useTodes from "../hooks/useTodes";
import InputText from "./InputText";
import { FaPlus } from "react-icons/fa";
import ShowTodes from "./ShowTodes";

function TodoApp() {
  const { todos, addTodes,deleteTodo,updateTode,clearComplete } = useTodes();
  const [newText, setNewText] = useState("");
  const [check, setcheck] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");

  const handleChange = (e) => {
    setNewText(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    console.log(newText);
    if (newText.trim() !== "") {
      addTodes(newText);
    }
    setNewText("");
    setcheck(!check);
  };
  const handleAddButton = () => {
    setcheck(!check);
  };
  const filteredTodes = useMemo(() => {
    switch (filterStatus) {
      case "done":
        return todos.filter((todo) => todo.done === true);
      case "notDone":
        return todos.filter((todo) => todo.done === false);
      case "all":
      default:
        return todos;
    }
  }, [todos, filterStatus]);

  
  return (
    <div className="bg-gray-200 w-full h-screen">
      <div className="bg-gray-200 w-full h-auto">
        <div className="flex items-center justify-center">
          <h1 className="text-gray-500 text-4xl mt-20">All your tasks</h1>
        </div>
        <div className="flex items-center justify-evenly mt-10  mb-2">
          <div>
            <h1 className="text-gray-500">
              <strong>Tasks</strong>
            </h1>
          </div>
          <div className="text-gray-500">
            <button 
              onClick={()=>setFilterStatus('all')}
              className="bg-white rounded-2xl px-8 py-0.5 mr-2 "
            >
              All
            </button>
            <button
              onClick={()=>setFilterStatus('done')}
              className="bg-white rounded-2xl px-6 py-0.5 mr-2"
            >
              Completed
            </button>
            <button
              onClick={()=>setFilterStatus('notDone')}
              className="bg-white rounded-2xl px-6 py-0.5 mr-2"
            >
              Remaining
            </button>
          </div>
        </div>
        <div className="">
          {check ? (
            <InputText
              value={newText}
              handleChange={handleChange}
              handleAdd={handleAdd}
              placeholder={"Enter Your Work"}
            />
          ) : (
            <button
              onClick={handleAddButton}
              className="border-1 border-gray-300 w-1/2 p-5 text-gray-500 rounded-2xl ml-85 flex items-center justify-center mb-2 "
            >
              <FaPlus size={25} className="text-gray-400 mr-2" />
              Add Your Task
            </button>
          )}
        </div>
        <div className="flex flex-col bg-gray-200 no-scrollbar">
          <ShowTodes
            list={filteredTodes}
            handleDelete={deleteTodo}
            handleUpdate={updateTode}
          />
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
