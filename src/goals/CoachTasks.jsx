import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CoachTasks() {
  
  /*const googleApiKey = "AIzaSyBXEn_QSHT40vlGfPoTpQhadfE44Vk-NkU";
  try{
    const genAI = new GoogleGenerativeAI(googleApiKey);

    async function run() {
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    
      const prompt = "Give me a three month long plan to start learning how to play the guitar with weekly objectives, each weak should have 7 different activities and should be made in list form separating each week by three = signs."
    
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(text);
    }
    
    run();
  }
  catch(error){
    console.log(error)
  }*/
  

  return (
      <>
        <div className="bg-mpurp text-twhite m-5 p-5 w-3/4 opacity-75 border-r rounded-2xl">
          <p className="text-xl">Metas Personales</p>

          <div className="flex">
            <div className="bg-dpurp w-1/2 h-full flex">
              <div className="bg-tred w-3/4">Matriz</div>
              <div className="w-1/4">Boton</div>
            </div>

            <div className="bg-twhite w-1/2">
              <CircularProgressbarWithChildren
                value={75}
                strokeWidth={8}
                styles={buildStyles({
                  pathColor: "#250E47",
                  trailColor: "transparent"
                })}
              >
                {/*
                  Width here needs to be (100 - 2 * strokeWidth)% 
                  in order to fit exactly inside the outer progressbar.
                */}
                <div style={{ width: "80%" }}>
                  <CircularProgressbar
                    value={70}
                    styles={buildStyles({
                      pathColor: "#250E47",
                      trailColor: "transparent"
                    })}
                  />
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        </div>
      </>
      
    )
  }