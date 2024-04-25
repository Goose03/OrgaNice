// assets
import home from "../assets/home.png";
import home2 from "../assets/home2.png";
import frame1 from "../assets/frame1.png";

// Componentes
import OlgaCard from "./olgaCard";
import TextGrid from "./textGrid";
import BotonesLogin from "./BotonesLogin";
import InfoAccordion from "./infoAccordion";

// home page
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
            <BotonesLogin />
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
        <div className="flex flex-col items-center">
          <TextGrid />
        </div>
        
        <div className="p-6 flex flex-col items-end">
          <OlgaCard />
        </div>
        <div>
          <InfoAccordion />
        </div>
      </section>
    </>
  );
}
