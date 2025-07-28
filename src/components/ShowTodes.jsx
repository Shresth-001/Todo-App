import React from "react";
import Todo from "./Todo";

function ShowTodes({ list,handleDelete }) {
  return (
    <div className="h-96 overflow-auto no-scrollbar ">
      {list.length > 0 && (
        <>
          {list.map((item) => (
            <div className="bg-white w-1/2 p-2  rounded-2xl shadow-md  ml-85 flex items-center  mb-3 scr ">
              <div className="flex items-center justify-start ">
                <label key={item.id}>
                  <input
                    name={item.id}
                    type="radio"
                    className=""
                    key={item.id}
                    checked={item.done}
                  />
                </label>
              </div>
              <div className="border-r-2 border-gray-300 mx-4 self-stretch sm:block hidden"></div>
              <div className="flex items-center justify-start mb-3 w-full">
                <Todo
                  key={item.id}
                  todo={item}
                  handleDelete={handleDelete}
                />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default ShowTodes;
