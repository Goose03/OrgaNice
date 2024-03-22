import React, { useState } from "react"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Tarea from "./Tarea"


export default function ToDo(){

    const [Tareas, setTareas] = useState([{id:123, nombre:'Practica 1', desc:'Lorem', priori:2, fecha:'00/00/0000'},
                                          {id:124, nombre:'Practica 2', desc:'Lorem', priori:3, fecha:'00/00/0000'}

    ]);


    function sumbitTarea(){
        console.log('pop-up')
    }

    return(
        <>
            <div className="bg-mpurp opacity-75 w-3/4 text-2xl rounded-2xl p-3 text-twhite ">
                <div className="flex justify-between">
                    <p>Tareas</p>
                    <Popup
                    trigger={<button className="hover:bg-dpurp hover:opacity-75 hover:text-twhite text-dpurp rounded-full w-10 h-10"> + </button>} 
                    modal>
                        <form onSubmit={sumbitTarea} className="bg-mpurp text-twhite p-4 rounded-lg shadow-md flex flex-col justify-center items-center">
                            <p className="text-2xl mb-4">Crea tu Propia Tarea</p>
                            
                            <p>Como Quieres Llamar a la Tarea?</p>
                            <input className="mb-4" type="text" />

                            <p>Cual es su Descripción?</p>
                            <input className="mb-4" type="text" />

                            <p>Cual es su Prioridad?</p>
                            <input className="mb-4" type="number" />

                            <p>Cual es la Fecha de Entrega?</p>
                            <input className="mb-4" type="date" />
                            
                            <button type="submit" className="bg-bwhite text-dpurp py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
                        </form>
                        
                    </Popup>
                </div>
                
                <div className="flex text-xl flex-auto">
                    <div className="w-1/5 pl-2">Tareas</div>
                    <div className="w-1/5 text-center">Info</div>
                    <div className="w-1/5 text-center">Prioridad</div>
                    <div className="w-1/5 text-center">Fecha</div>
                    <div className="w-1/5 text-center">Compleción</div>
                </div>

                {Tareas.map(tarea => ( <Tarea key={tarea.id} prop={tarea} /> ))}
            </div>
        </>
    )
}

