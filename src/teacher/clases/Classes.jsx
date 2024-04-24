import ClaseInfo from "../tareas/ClaseInfo";

export default function Classes(props){
    function openClass(){
        console.log("Hello")
    }

    return(
        <>
            <button 
            className="bg-mpurp h-fit lg:w-1/5 md:w-1/3 rounded-lg text-twhite p-5 mx-5 my-5 flex shadow-md shadow-transparent hover:my-custom-shadow"
            onClick={openClass}
            >
                <div className="bg-twhite w-1/3 h-max text-dpurp text-center">
                    <p>img</p>
                </div>

                <div className="ml-5 w-full text-left">
                    <p className="text-xl">{props.class.name}</p>
                    <p className="text-sm">{props.class.studentCount} Alumnos</p>
                    <p className="font-bold">{props.class.hwNum} Tareas Habiles</p>
                </div>
            </button>
        </>
    )
    
}