import { GoogleGenerativeAI } from "@google/generative-ai";

export default function CoachTasks() {
  
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
  

  return (
      <>
        <div className="bg-red-900 text-2xl w-1/2 rounded-lg h-64">
          <p>Hello World!</p>
        </div>
      </>
      
    )
  }