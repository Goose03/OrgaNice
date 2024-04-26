import olga_Img from "/src/assets/olgaTransparente.png";

export default function OlgaCard() {
  return (
    <>
      <a
        href="#"
        className="w-1/2 flex flex-col items-center justify-center bg-white rounded-lg shadow md:flex-row md:max-w-xl hover:bg-bgrey
       dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 opacity-90"
      >
        <div className="bg-dpurp w-full h-100 flex items-center justify-center rounded-lg">
          <img
            className="md:h-auto md:w-48 md:rounded-lg"
            src={olga_Img}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Conoce a Olga
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Olga es nuestra coach AI dedicada a ayudar a los alumnos a encontrar
            las maneras más eficientes de lograr sus metas
          </p>
        </div>
      </a>
    </>
  );
}
