import { useState } from "react"

import Classes from "./Classes"

export default function Teacher(){
    const dummyClass = [
        { id:1234, name:"Matematicas 1", studentCount:32, hwNum:6 },
        { id:1235, name:"Matematicas 2", studentCount:32, hwNum:6 },
        { id:1236, name:"Matematicas 3", studentCount:32, hwNum:6 },
        { id:1237, name:"Matematicas 4", studentCount:32, hwNum:6 },
    ]
    
    const [classes, setClasses] = useState(dummyClass);

    return(
        <>
            <div className="bg-dpurp p-5 h-screen">
                <div className="flex flex-wrap justify-around">
                    {classes.map((thisClass) => {
                        return <Classes key={thisClass.id} class={thisClass} />;
                    })}
                </div>

            </div>
        </>
    )
}