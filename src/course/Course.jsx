import React, { useState } from "react";
import img_1 from "../assets/images/1.jpg";
import img_2 from "../assets/images/2.jpg";
import img_3 from "../assets/images/3.jpg";
import AddCourse from "./addCourse";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function Course() {
  const courseList = [
    {
      imagen: img_1,
      title: "Implementación metodos comp.",
      prof: "Vladimir",
      codigoClase: "2145",
    },
    {
      imagen: img_2,
      title: "Construcción de Software",
      prof: "Axel",
      codigoClase: "1004",
    },
    {
      imagen: img_3,
      title: "arte",
      prof: "moises",
      codigoClase: "2100",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [inputVisible, setInputVisible] = useState(false);

  const toggleInput = () => {
    setInputVisible((prevState) => !prevState);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      return prevSlide === courseList.length - 1 ? 0 : prevSlide + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => {
      return prevSlide === 0 ? courseList.length - 1 : prevSlide - 1;
    });
  };

  return (
    <div className="h-80">
      <div className="h-52 relative">
        <div className="bg-mpurp opacity-75 h-52 w-1/5 min-w-60 mx-4 text-2xl rounded-2xl p-3 shadow-xl text-twhite flex flex-col items-start absolute ">
          <div className="flex items-splice justify-between w-full">
            <h1 className="mb-2 ml-2">Cursos</h1>
            <div className=" flex items-center">
              <button
                onClick={toggleInput}
                title="Agregar clase"
                type="button"
                data-dial-toggle="speed-dial-text-input-field"
                aria-controls="speed-dial-text-input-field"
                aria-expanded="false"
                class="relative flex items-center justify-center text-white bg-bwhite rounded-full w-7 h-7 opacity-60 hover:opacity-100 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
              >
                <svg
                  class="w-4 h-4 transition-transform hover:rotate-45 text-mpurp"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
          </div>{" "}
          {/* //elements div */}
          <div className="relative h-2/3 flex items-start">
            {/* //image */}
            <div className="w-1/2 flex items-end">
              <img
                className="rounded-2xl w-3/4 h-auto"
                src={courseList[currentSlide].imagen}
                alt="course image"
              />
            </div>

            {/* Right side containing the heading and unordered list */}
            <div className="w-1/2 ml-2 flex flex-col justify-between items-end break-words">
              {/* Div for the heading */}
              <div>
                <h2 className=" text-white text-xl font-semibold">
                  {courseList[currentSlide].title}
                </h2>
              </div>

              {/* Div for the unordered list */}
              <ul className="text-white text-sm mb-1 absolute bottom-0 right-0">
                {/* List item for Profesor */}
                <li>
                  <span>Profesor : </span>
                  {courseList[currentSlide].prof}
                </li>

                {/* List item for the badge */}
                <li className="text-right">
                  {" "}
                  <span class="bg-purple-100 text-dpurp text-xs font-medium px-1.5 py-0.5 rounded">
                    {courseList[currentSlide].codigoClase}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between">
            <div onClick={prevSlide}>
              <BsChevronCompactLeft size={30} />
            </div>

            <div onClick={nextSlide}>
              <BsChevronCompactRight size={30} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-40 mt-2 ml-6">{inputVisible && <AddCourse />}</div>
    </div>
  );
}
