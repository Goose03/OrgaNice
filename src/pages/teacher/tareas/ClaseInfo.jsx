import { useParams } from "react-router";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from "react";
import Popup from 'reactjs-popup';

import TareaDesc from "./TareaDesc";

export default function ClaseInfo(props){
    const { id } = useParams();

    const dummyClase = { nom: "Matematicas 2", cantAlu: 32, tarAct: 6,  };

    const dummyTareas = [{id:123, nombre:'Practica 1', priori:2, fecha:'00/00/0000', cantEntre: 12},
                         {id:124, nombre:'Practica 2', priori:3, fecha:'00/00/0000', cantEntre: 2}
    ]   

    const [clase, setClase] = useState(dummyClase);
    const [tareas, setTareas] = useState(dummyTareas);

    const [clipboard, setClipboard] = useState('Copy to Clipboard')

    const arrowStyle = { color: '#250E47' }; 
    
    return(
        <>
            <div className="bg-mpurp h-screen">
                <div className="text-twhite p-5">
                    <h1 className="text-6xl">{clase.nom}</h1>

                    <p className="my-5 text-lg">{clase.cantAlu} Alumnos | {clase.tarAct} Tareas Activas</p>

                    <div className="border-2 border-dpurp rounded-xl pl-2 flex text-2xl w-fit justify-center items-center">
                        <p className="pr-2 border-r-2 border-dpurp">Codigo de Inscripcion</p>
                        <CopyToClipboard 
                            text={id}
                            >
                            <Popup
                                trigger={<button className="hover:bg-dpurp/[.5] p-2" onClick={() => setClipboard('Copeid!')}>{id}</button>}
                                position={'top center'}
                                on={['hover', 'focus']}
                                {...{arrowStyle}}
                                >
                                    <p className="bg-dpurp/80 text-twhite p-2 rounded-lg">{clipboard}</p>
                            </Popup>
                        </CopyToClipboard>
                    </div>
                    
                    <div className="divider"></div>
                    {tareas.map((tarea) => {
                        return <TareaDesc key={tarea.id} tarea={tarea} cantAlu={clase.cantAlu} />;
                    })}
                </div>
            </div>
        </>
    )
}