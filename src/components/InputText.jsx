import React, { useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa";

function InputText({
  name='input',
  value,
  handleChange,
  placeholder='Enter your work',
  className = "border-1 border-gray-300 w-1/2 p-5 text-gray-500 rounded-2xl ml-85  focus:outline-gray-500 fo  ",
  type = "text",
  handleAdd,
}) {
  const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    })
    

  return (
    <div className=" pb-10">
      <input
      ref={inputRef}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        className={className}
        placeholder={placeholder}
      />
      <button
        onClick={handleAdd}
        type="submit"
        className="px-5 py-2  bg-gray-300 hover:bg-gray-400 ml-10 rounded-md "
      >
        <FaPlus
          size={25}
          className="text-gray-500 mr-2 flex items-center justify-center ml-2"
        />
      </button>
    </div>
  );
}

export default InputText;
