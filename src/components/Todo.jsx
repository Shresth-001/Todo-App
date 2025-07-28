import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

function Todo({ todo,handleDelete}) {
 
  let todoContent=todo.todo;
  
  return (
    <>
      
      <div className="text-lg font-bold flex items-center justify-evenly w-full ">
        <div className="text-lg font-bold w-full">
            {todoContent}
        </div>
        <div className="flex items-center justify-center ml-70 ">
        <button
          className=""
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          <FaTrash size={24} className="mr-2  text-gray-300 " />
        </button>
        </div>
      </div>
    </>
  );
}

export default Todo;
