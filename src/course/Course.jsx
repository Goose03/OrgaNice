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
    <div className="bg-mpurp opacity-75 h-52 w-1/5 mx-4 text-2xl rounded-2xl p-3 shadow-xl text-twhite flex flex-col items-start absolute ">
      
      <h1 className="mb-2">Cursos </h1>
      
      <div className="bg-dpurp">
        
          <div key={currentSlide} className="flex items-center">
            
            <div className="w-2/3">
              <img
                className="rounded-2xl mr-3 "
                src={courseList[currentSlide].imagen}
                alt="course image"
              />
            </div>

            <div className="w-full">
              <div className="h-1/2 bg-twhite flex items-center">
                <h2 className="text-left font-bold text-xl overflow-hidden h-full">
                  {courseList[currentSlide].title}
                </h2>
              </div>

              <div className="h-1/2 align text-right bg-mpurp">
                <p className="text-base">
                  Prof. {courseList[currentSlide].prof}
                </p>
                <p className="text-sm font-semibold">
                  Código: {courseList[currentSlide].codigoClase}
                </p>
              </div>
            </div>
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
