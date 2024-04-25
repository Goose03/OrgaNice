import home from "../assets/home.png";
import home2 from "../assets/home2.png";
import frame1 from "../assets/frame1.png";
import OlgaCard from "./olgaCard";
import TextGrid from "./textGrid";

export default function AboutPage() {
  return (
    <>
      <section
        className="bg-center bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: `url(${home})`,
          minHeight: "150vh",
        }}
      >
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-4 w-1/3 p-6 flex flex-col rounded-xl">
          <h1 className="leading-tight text-6xl  text-dpurp font-bold">
            OrgaNice
          </h1>
          <p className="m-2 text-2xl  text-mpurp font-normal">
            Planea. Progresa. Logra.
          </p>
          <div class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
            <a
              href="#"
              class="inline-flex items-center py-1 px-3 text-sm font-medium text-center text-dpurp rounded-lg border border-mpurp hover:bg-bgrey"
            >
              <span class="mr-1">Inicia Sesión</span>
              <svg
                class="w-3 h-3 rtl:rotate-180"
                aria-hidden="true" // Decorative SVG
                xmlns="http://www.w3.org/2000/svg" // SVG namespace
                fill="none" // No fill color
                viewBox="0 0 14 10" // View box
              >
                // Path element defining SVG icon
                <path
                  stroke="currentColor" // Stroke color
                  stroke-linecap="round" // Line caps
                  stroke-linejoin="round" // Line joins
                  stroke-width="2" // Stroke width
                  d="M1 5h12m0 0L9 1m4 4L9 9" // Path data
                />
              </svg>
            </a>
            <button
              type="button"
              class="focus:outline-none text-twhite bg-mpurp hover:bg-dpurp focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Regístrate
            </button>
          </div>
        </div>
      </section>
      <section
        className="bg-center bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: `url(${home2})`,
          minHeight: "150vh",
        }}
      >
        <div class="ml-20">
          <div class="mx-auto md:ml-0 border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[px] md:h-[294px] md:max-w-[512px]">
            <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
              <img
                src={frame1}
                class="dark:hidden h-[190px] md:h-[278px] w-full "
                alt=""
              />
            </div>
          </div>
          <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
            <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
          </div>
        </div>
        <div className="items-end">
        <OlgaCard />
        </div>
      </section>
    </>
  );
}
