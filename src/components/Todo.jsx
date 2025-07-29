import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

function Todo({ todo,handleDelete,handleUpdate}) {
 
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <div className="flex items-center justify-center">
        <input
        className=""
          value={todo.text}
          onChange={(e) => {
            handleUpdate({
              ...todo,
              text: e.target.value,
            });
          }}
        />
        
      </div>
    );
  } else {
    todoContent = (
      <>
        {todo.text}
      </>
    );
  }
  
  return (
    <>
      
      <div className="text-lg font-bold flex items-center justify-evenly w-full ">
        <div className="text-lg font-bold w-full">
            {todoContent}
        </div>
        <div className="flex items-center justify-center ml-70 ">
          {isEditing?(<button className="" onClick={() => setIsEditing(false)}>
          <IoIosCheckmarkCircle size={30} className="mr-2 text-gray-300  " />
        </button>):(<button className="" onClick={() => setIsEditing(true)}>
          <FaEdit size={25} className="mr-2 text-gray-300 " />
        </button>)}
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
