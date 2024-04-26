import { useState } from 'react';
import Popup from 'reactjs-popup';

export default function CreateClase(props){
    
    const [nuevaClase, setNuevaClase] = useState({ id:1238, name:"", acr: "", studentCount:0, hwNum:0 })
    
    const handleNombre = (event) => setNuevaClase({...nuevaClase, name: event.target.value})
    const handleAcr = (event) => setNuevaClase({...nuevaClase, acr: event.target.value})

    const [newId, setnewId] = useState(1238);
    
    function createClase(){
        setNuevaClase({...nuevaClase, id: newId})
        setnewId(newId + 1);
        
        props.set([...props.clases, nuevaClase]);
    }

    return(
        <>
            <Popup 
            modal
            trigger={<button className="hover:bg-mpurp/[.5] px-3 text-2xl rounded-full">+</button>} position="top left">    
                {close => (      
                    <div className="bg-bwhite text-dpurp rounded-lg p-5 flex flex-col justify-center items-center">        
                        <h1 className='text-2xl pb-4'>Nueva Clase</h1>

                        <div className='flex flex-col pb-4'>
                            <label className='' >Nombre</label>
                            <input maxLength="30" onChange={handleNombre} type="text" className="bg-twhite rounded-lg shadow-xl p-1" />
                        </div>

                        <div className='pb-4'>
                            <label className='flex flex-col' >Acronimo</label>
                            <input maxLength="4" onChange={handleAcr} type="text" className="bg-twhite rounded-lg shadow-xl p-1"/>
                        </div>

                        <button onClick={() => {createClase(); close();}} className="bg-dpurp hover:bg-dpurp/[.5] text-twhite hover:text-dpurp p-2 rounded-xl shadow-sm">          
                            Create        
                        </button>      
                    </div>    
                )}  
            </Popup>
        </>
    )
}