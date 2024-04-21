import React, { useState } from "react";
import img_1 from "../assets/images/1.jpg";
import img_2 from "../assets/images/2.jpg";
import img_3 from "../assets/images/3.jpg";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export default function Course() {
  const courseList = [
    {
      imagen: img_1,
      title: "Implementación metodos comp.",
      prof: "Vladimir",
      codigoClase: "IMC",
    },
    {
      imagen: img_2,
      title: "Construcción de Software",
      prof: "Axel",
      codigoClase: "CS",
    },
    {
      imagen: img_3,
      title: "arte",
      prof: "moises",
      codigoClase: "ARTE",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

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
    <div className="bg-mpurp opacity-75 h-52 w-1/5 mx-4 text-2xl rounded-2xl p-3 shadow-xl text-twhite flex flex-col items-start absolute ">
      <h1 className="mb-2">Cursos </h1>
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
        <div className="w-1/2 flex flex-col justify-between items-end">
          {/* Div for the heading */}
          <div>
            {" "}
            {/* Reduced margin bottom */}
            <h2 className="text-white text-xl font-semibold">
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

              <span class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
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
  );
}
