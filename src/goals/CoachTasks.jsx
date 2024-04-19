import { GoogleGenerativeAI } from "@google/generative-ai";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useState } from "react";

export default function CoachTasks() {
  const dummyDaily = "10101110010111010011011010011101001110010101101100010111101011001001010100100t0000000000000000000000"
  const dummyGoal =  {total: 90, week: 25, progress: dummyDaily};

  const [goal, setGoal] = useState(dummyGoal);
  
  /*
  const googleApiKey = "AIzaSyBXEn_QSHT40vlGfPoTpQhadfE44Vk-NkU";
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
  }
  */
  

  return (
      <>
        <div className="bg-mpurp text-twhite m-5 p-5 w-1/2 opacity-75 border-r rounded-2xl">
          <p className="text-xl">Metas Personales</p>

          <div className="flex justify-between ">
            <div className="bg-dpurp w-1/2 h-full flex">
              <div className="bg-tred w-3/4">
                Matriz
              </div>
              <div className="w-1/4">Boton</div>
            </div>
            
            <div  className=" h-1/2">
              <CircularProgressbarWithChildren
                value={goal.total}
                strokeWidth={8}
                styles={buildStyles({
                  pathColor: "#250E47",
                  trailColor: "transparent",
                })}
                className="grow-0"
              >
                
                <div style={{ width: "80%"}}>
                  <CircularProgressbarWithChildren
                    value={goal.week}
                    styles={buildStyles({
                      pathColor: "#250E47",
                      trailColor: "transparent"
                    })}
                    className=""
                  >

                    <div className="text-dpurp text-2xl font-bold">
                      <p>{goal.total}%</p>
                      <p>{goal.week}%</p>
                    </div>

                  </CircularProgressbarWithChildren>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        </div>
      </>
      
    )
  }