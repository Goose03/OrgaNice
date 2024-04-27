import { Link } from "react-router-dom";

export default function BotonesLogin() {
    return(
        <>
        <Link
            to={"/login"}
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
        </Link>

        <Link
          to={"/signUp"}
          class="focus:outline-none text-twhite bg-mpurp hover:bg-dpurp focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Regístrate
        </Link>
        </>
    )
}