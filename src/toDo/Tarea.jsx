import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Tarea(props){
    
    const tareaObj = props;

    return(
        <>
            <div className="bg-bwhite flex flex-auto items-center rounded-xl text-tpurp text-xl mt-2 h-10">
                
                <p className="w-1/5 pl-2">{tareaObj.prop.nombre}</p>
                
                <Popup trigger={<button className="w-1/5 py-1" >ⓘ</button>}
                modal>
                    <div className="bg-mpurp text-twhite rounded-lg shadow-md flex flex-col justify-center items-center">
                        <h1 className='text-2xl my-5'>{tareaObj.prop.nombre}</h1>

                        <h2 className='font-bold'>Descripcion:</h2>
                        <p className='mb-5'>{tareaObj.prop.desc}</p>
                        
                        <p className='font-bold'>Prioridad:</p>
                        <p className='mb-5'>{tareaObj.prop.priori}</p>

                        <p className='font-bold'>Fecha de Entrega:</p>
                        <p className='mb-5'>{tareaObj.prop.fecha}</p>
                    </div>
                </Popup>
                
                
                <p className="w-1/5 text-center ">{tareaObj.prop.priori}</p>
                
                <p className="w-1/5 text-center ">{tareaObj.prop.fecha}</p>
                
                <div className="w-1/5  flex justify-center items-center">
                    <button className="rounded-lg px-2 py-1 mx-1 bg-bgrey h-9 w-9 text-tgreen relative left-4">✔</button>
                    <button className="rounded-lg px-2 py-1 mx-1 bg-bgrey h-9 w-9 text-tred relative left-3">✘</button>
                </div>
            </div>
        </>
    )
}

Tarea.propTypes = {
    id: PropTypes.number,
    nombre: PropTypes.string,
    desc: PropTypes.string,
    priori: PropTypes.number,
    fecha: PropTypes.string
}