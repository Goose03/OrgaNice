// assets
import home from "../assets/home.png";
import home2 from "../assets/home2.png";

// Componentes
import OlgaCard from "./olgaCard";
import TextGrid from "./textGrid";
import BotonesLogin from "./BotonesLogin";
import InfoAccordion from "./infoAccordion";
import Footer from "./footer";

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
        <div className="flex flex-col items-center mb-20">
          <TextGrid />
        </div>

        <div className="p-6 flex flex-col items-center my-20">
          <OlgaCard />
        </div>
        <div className=" flex flex-col items-center mt-20">
          <div className="flex items-center ">
            <h1 className="text-5xl mr-4 font-bold text-dpurp tracking-wide">
              FAQ
            </h1>
          </div>
          <div className="p-4 mb-20">
            <InfoAccordion />
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
        <div className="flex flex-col items-center ">
        <h1 className="text-5xl mr-4 font-bold text-dpurp tracking-wide">
          Conoce a nuestro equipo
        </h1>
        <img class="h-auto w-2/5 rounded-lg mt-10" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt=""/>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <Footer />
        </div>
      </section>
    </>
  );
}
