import Popup from 'reactjs-popup';
import 'ldrs/ripples'

export default function TareaDesc(props){

    return(
        <>
            <div className="flex justify-between bg-bwhite/[.60] p-5 m-5 rounded-lg text-dpurp">
                <div className="">
                    <h1>{props.tarea.nombre}</h1>
                    <p>{props.tarea.fecha}</p>
                    <p>Proiroidad:{props.tarea.priori}</p>
                    <p>Respuestas: {props.tarea.cantEntre}</p>
                </div>

                <div className={`border-2 border-dpurp ${props.tarea.cantEntre / props.cantAlu > 0.2 ? 'hover:bg-dpurp/30' : ''} flex justify-center p-2 rounded-lg`}>
                    <Popup
                        trigger={
                            <button disabled={((props.tarea.cantEntre / props.cantAlu) > 0.2) ? false : true } >
                                <p>Obtener Retro</p>
                                <p>{Math.floor(props.tarea.cantEntre / props.cantAlu * 100)}%</p>
                            </button>
                        }
                        modal
                    >
                        <div className='bg-mpurp border-2 border-dpurp/50 text-twhite p-5 flex flex-col justify-center items-center rounded-lg'>
                            <p>Creando Retro</p>
                            <div className='p-2 w-fit'>
                                <l-ripples
                                size="45"
                                speed="2"
                                color="white"
                                ></l-ripples>
                            </div>
                        </div>
                    </Popup>
                </div>
            </div>
        </>
    )
}