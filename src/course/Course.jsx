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
      title: "Construcción Software",
      prof: "Axel",
      codigoClase: "CS",
    },
    {
      imagen: img_3,
      title: "arte",
      prof: "moises",
      codigoClase: "ARTE",
    }
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
    <div className="bg-dpurp opacity-75 w-1/5 mx-4 text-2xl h-2/6 rounded-2xl p-3 shadow-xl text-twhite flex flex-col items-start absolute top-4 right-0">
      <h1 className="mb-2">Cursos </h1>
      <div
        className="slider">
        {/* Render */}
        <div className="slider-container relative overflow-hidden">
          <div key={currentSlide} className="slide flex items-center">
            <img
              className="w-1/3 h-fit rounded-2xl mr-3"
              src={courseList[currentSlide].imagen}
              alt="course image"
            />
            <div className="flex flex-col w-2/3">
              <h2 className="text-left font-bold text-xl h-10">
                {courseList[currentSlide].title}
              </h2>
              <p className="text-right text-base h-10">
                Prof. {courseList[currentSlide].prof}
              </p>
              <p className="text-right text-sm font-semibold">
                Código: {courseList[currentSlide].codigoClase}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[65%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full drop-shadow-lg p-2 bg-black/20 text-twhite cursor-pointer"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>
      <div
        className="absolute top-[65%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full drop-shadow-lg p-2 bg-black/20 text-twhite cursor-pointer"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
}
