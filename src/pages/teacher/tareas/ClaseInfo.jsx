import { useParams } from "react-router"

import TareaDesc from "./TareaDesc"

export default function ClaseInfo(props){
    const { id } = useParams();

    return(
        <>
            <div className="bg-mpurp h-full">
                <div className="text-twhite p-5">
                    <h1 className="text-6xl">Clase {id}</h1>
                    
                    <div className="divider"></div>
                    <TareaDesc />
                </div>
            </div>
        </>
    )
}