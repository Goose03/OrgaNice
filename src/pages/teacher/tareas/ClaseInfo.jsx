import TareaDesc from "./TareaDesc"

export default function ClaseInfo(props){
    


    return(
        <>
            <div className="bg-mpurp h-full">
                <div className="text-twhite p-5">
                    <h1 className="text-6xl">Tareas</h1>
                    
                    <div className="divider"></div>
                    <TareaDesc />
                </div>
            </div>
        </>
    )
}