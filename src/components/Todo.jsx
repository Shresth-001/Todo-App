import React, { useState } from "react";

function Todo({ todo}) {
 
  let todoContent=todo.todo;
  
  return (
    <>
      
      <div className="text-lg font-bold flex items-center justify-evenly w-full ">
        <div className="text-lg font-bold w-full">
            {todoContent}
        </div>
      </div>
    </>
  );
}

export default Todo;
