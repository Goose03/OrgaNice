import { useState, useEffect } from "react"
import Popup from 'reactjs-popup';

import Classes from "./Classes"
import CreateClase from "./CreateClase";

export default function Teacher(){
    const dummyClass = [
        { id:1234, name:"Matematicas 1", acr: "Mat1", studentCount:32, hwNum:6 },
        { id:1235, name:"Matematicas 2", acr: "Mat2", studentCount:32, hwNum:6 },
        { id:1236, name:"Matematicas 3", acr: "Mat3", studentCount:32, hwNum:6 },
        { id:1237, name:"Matematicas 4", acr: "Mat4", studentCount:32, hwNum:6 },
    ]
    
    const [classes, setClasses] = useState(dummyClass);

    return(
        <>
            <div className="bg-dpurp p-5 h-screen text-twhite">
                <div className="mx-5 flex justify-between">
                    <h1 className="text-4xl">Mis Clases</h1>
                    <CreateClase clases={classes}  set={setClasses}/>
                </div>

                <div className="divider" />

                <div className="flex flex-wrap justify-around">
                    {classes.map((thisClass) => {
                        return <Classes key={thisClass.id} class={thisClass} />;
                    })}
                </div>

            </div>
        </>
    )
}