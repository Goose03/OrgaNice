import React, { useState } from "react";

export default function InfoAccordion() {
  const [open, setOpen] = useState(null);

  const handleClick = (accordionId) => {
    setOpen((prev) => (prev === accordionId ? null : accordionId));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white border rounded-xl border-gray-200 shadow md:flex-row md:max-w-xl opacity-90">
        <div id="accordion-heading" data-accordion={open}>
          <h2 id="features">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-900 rounded-lg bg-gray-100 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="accordion-heading-button"
              onClick={() => handleClick("accordion-heading")}
              aria-expanded={open === "accordion-heading"}
            >
              <span>¿Qué puedes hacer con OrgaNice?</span>
            </button>
          </h2>
          <div id="accordion-heading-body">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                OrgaNice se esfuerza por simplificar y mejorar la experiencia
                escolar tanto para los alumnos como para los maestros. Con
                OrgaNice, puedes:{" "}
              </p>
            </div>
          </div>
          <h2 id="accordion-1-title">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="accordion-1-button"
              onClick={() => handleClick("accordion-1-button")}
              aria-expanded={open === "accordion-1-button"}
            >
              <span>Features para Alumno</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div id="accordion-1-body" className={open !== "accordion-1-button" ? "hidden" : ""}>
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
              <ol className="mb-2 text-gray-500 dark:text-gray-400">
                <li>- Gestiona tus tareas escolares y personales de manera fácil y rápida.</li>
                <li>- Mantén un registro claro de todas tus tareas pendientes.</li>
                <li>- Recibe apoyo por Coach AI Olga para planear tus metas a corto, mediano y largo plazo.</li>
                <li>- Disfruta de entretenimiento educativo con nuestro videojuego integrado.</li>
                <li>- Visualiza tu progreso con matrices y barras de porcentaje.</li>
              </ol>
            </div>
          </div>
          <h2 id="accordion-2-title">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 rounded-b-lg font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
              data-accordion-target="accordion-2-button"
              onClick={() => handleClick("accordion-2-button")}
              aria-expanded={open === "accordion-2-button"}
            >
              <span>Features para maestro</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div id="accordion-2-body" className={open !== "accordion-2-button" ? "hidden" : ""}>
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <ol className="mb-2 text-gray-500 dark:text-gray-400">
                <li>- Crea y asigna tareas diractamente a la agenda de tus alumnos.</li>
                <li>- Accede a un registro claro de todas las tareas pendientes creadas por ti.</li>
                <li>- Recibe feedback sobre el desempeño de tus alumnos mediante el Coach AI.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
