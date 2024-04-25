import Popup from 'reactjs-popup';

export default function CreateTarea(){

    const [nombre, setNombre] = useState();
    const [desc, setDesc] = useState();
    const [priori, setPriori] = useState();
    const [fecha, setFecha] = useState();

    return(
        <>    
            <Popup 
            modal
            trigger={<button className="hover:bg-mpurp/[.5] px-3 text-2xl rounded-full">+</button>} position="top left">    
                {close => (      
                    <div className="bg-bwhite text-dpurp rounded-lg p-5 flex flex-col justify-center items-center">        
                        <p className="text-4xl pb-4">Nueva Tarea</p> 

                        <div className="pb-4 flex flex-col">
                            <label className="">Nombre</label>
                            <input type="text" placeholder="Actividad 1" className="bg-twhite rounded-lg shadow-xl p-1" />
                        </div>

                        <div className="pb-4 flex flex-col">
                            <label className="">Descripcion</label>
                            <textarea type="text" placeholder="Ejercicios 1 a 10..." className="bg-twhite rounded-lg shadow-2xl p-1 resize-none h-20" />
                        </div>

                        
                        <div className="pb-5 flex flex-col items-center">
                            <label className="">Prioridad</label>
                            <input type="number" min="1" max="5" placeholder="" className="bg-twhite rounded-lg shadow-xl p-1 w-1/4 text-center" />
                        </div>

                        <div className="pb-5 flex flex-col items-center">
                            <label className="">Fecha de Entrega</label>
                            <input type="date" placeholder="1" className="bg-twhite rounded-lg shadow-xl p-1 text-center" />
                        </div>

                        <button className="bg-dpurp hover:bg-dpurp/[.5] text-twhite hover:text-dpurp p-2 rounded-xl shadow-sm" onClick={createTarea}>          
                            Sumbit        
                        </button>      
                    </div>    
                )}  
            </Popup>
        </>
    )
}