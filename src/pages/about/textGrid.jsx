import olga_Img from "/src/assets/olgaTransparente.png";

export default function TextGrid() {
  return (
    <>
      <div className="grid mb-2 w-1/2 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-4 md:grid-cols-2 bg-white dark:bg-gray-800 opacity-90">
        <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-l-lg md:rounded-r-none dark:bg-gray-800 dark:border-gray-700 h-full">
          <blockquote className="max-w-2xl mx-auto mb-2 text-gray-500 lg:mb-4 dark:text-gray-400 flex-grow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">
              Feedback Personalizado{" "}
            </h3>
            <p className="my-2 mx-4">
              A través del <a className="underline decoration-sky-500">coach AI</a> generamos feedback personalizado por tarea a
              los maestros
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <img
              className="rounded-full w-12 h-auto bg-dpurp"
              src={olga_Img}
              alt="profile picture"
            />
            <div className="space-y-0.5 font-semibold text-sm dark:text-white text-left rtl:text-right ms-2">
              <div>Reportes con feedback de Olga</div>
            </div>
          </figcaption>
        </figure>
        
        <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border border-gray-200 md:rounded-r-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700 h-full">
          <blockquote className="max-w-2xl mx-auto mb-2 text-gray-500 lg:mb-4 dark:text-gray-400 flex-grow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">
              Organizamos tus Tareas{" "}
            </h3>
            <p className="my-2 mx-4">
              Tomamos en cuenta la prioridad que destacan los profesores con las
              fechas de entrega para darte el mejor orden para hacer tus tareas
            </p>
          </blockquote>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#250E47" className="w-8 h-auto my-2 mx-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
          </svg>
        </figure>

        <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border border-gray-200 rounded-b-lg md:rounded-es-lg md:rounded-l-none md:rounded-r-lg dark:bg-gray-800 dark:border-gray-700 h-full">
          <blockquote className="max-w-2xl mx-auto mb-2 text-gray-500 lg:mb-4 dark:text-gray-400 flex-grow">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">
              Todo de una Manera Sencilla
            </h3>
            <p className="my-2 mx-4">
              Todo esto lo realizamos mediante una UI pensada en la comodidad de
              los usuarios y la facilidad de uso
            </p>
          </blockquote>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#250E47" className="w-8 h-auto my-2 mx-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </figure>

        <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border border-gray-200 md:rounded-se-lg md:border-e md:rounded-l-none md:rounded-r-lg dark:bg-gray-800 dark:border-gray-700 h-full">
          <blockquote className="max-w-2xl mx-auto mb-2 text-gray-500 lg:mb-4 dark:text-gray-400 flex-grow ">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-4">
              Te Ayudamos a Mejorar
            </h3>
            <p className="my-2 mx-4 ">
              Te planteamos un plan personalizado semanal para mejorar en la
              tarea que tu quieras a través del Coach Ai
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <img
              className="rounded-full w-12 h-auto bg-dpurp"
              src={olga_Img}
              alt="profile picture"
            />
            <div className="space-y-0.5 font-semibold text-sm dark:text-white text-left rtl:text-right ms-2">
              <div>Olga planea tus metas semanalmente</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
}
