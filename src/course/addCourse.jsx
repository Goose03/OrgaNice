import React, { useState } from "react";

export default function AddCourse() {
  const [inputValue, setInputValue] = useState("");

  const courseAdded = () => {
    console.log("Course Added. Clave del curso: ", inputValue);
    setInputValue("");
  };

  return (
    <>
      <div className="relative">
        <div className="flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ingresa clave del curso..."
            className="bg-purple-50 opacity-60 border-mpurp border-1.5 h-10 min-w-40 px-2 text-base rounded-l-lg shadow-xl text-dpurp"
          />
          <button
            onClick={courseAdded}
            className="bg-mpurp hover:bg-dpurp text-white font-bold py-2 px-4 rounded-r-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
