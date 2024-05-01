import PropTypes from 'prop-types';
import { useState } from 'react';
import Popup from 'reactjs-popup';

export default function Tarea(props){

    const tareaObj = props;
    const { remove } = props;

    const [retro, setRetro] = useState({dif:0, agr:0, opinion:'Lorem'});

    const [ratingDif, setRatingDif] = useState(null);
    const [hoverDif, setHoverDif] = useState(null);

    const [ratingAgr, setRatingAgr] = useState(null);
    const [hoverAgr, setHoverAgr] = useState(null);

    const handleOpinion = (event) => setRetro({...retro, opinion:event.target.value});


    function sumbitRetro(event){
        event.preventDefault();
        
        if(tareaObj.prop.clase == 'pers'){
            console.log('Tarea Completada!');
        }
        else{
            console.log(retro);
        }

        remove(tareaObj.prop.id);
        setRetro({dif:0, agr:0, opinion:"lorem"});
    }

    return(
        <>
            <div className="bg-bwhite flex flex-auto items-center rounded-xl text-tpurp text-xl mt-2 h-10">
                
                <p className="w-1/5 pl-2">{tareaObj.prop.nombre}</p>
                
                <Popup 
                trigger={<button className="w-1/5 py-1" >ⓘ</button>}
                modal>
                    <div className="bg-mpurp text-twhite rounded-lg flex flex-col justify-center items-center">
                        <h1 className='text-2xl my-5'>{tareaObj.prop.nombre}</h1>
                        
                        <h2 className='font-bold'>Clase:</h2>
                        <p className='mb-5'>{tareaObj.prop.clase}</p>

                        <h2 className='font-bold'>Descripcion:</h2>
                        <p className='mb-5'>{tareaObj.prop.desc}</p>
                        
                        <h2 className='font-bold'>Prioridad:</h2>
                        <p className='mb-5'>{tareaObj.prop.priori}</p>

                        <h2 className='font-bold'>Fecha de Entrega:</h2>
                        <p className='mb-5'>{tareaObj.prop.fecha}</p>
                    </div>
                </Popup>
                
                
                <p className="w-1/5 text-center ">{tareaObj.prop.priori}</p>
                
                <p className="w-1/5 text-center ">{tareaObj.prop.fecha}</p>
                
                <div className="w-1/5  flex justify-center items-center">
                    <Popup
                    trigger={<button className="rounded-lg px-2 py-1 mx-1 bg-bgrey h-9 w-9 text-tgreen relative left-4">✔</button>}
                    modal>
                        <form onSubmit={sumbitRetro}>
                        {tareaObj.prop.clase !== 'pers' ? 
                                <div className="bg-mpurp text-twhite rounded-lg flex flex-col justify-center items-center p-5">
                                    <h1 className='text-2xl mb-5'>Retroalimentacion Tarea</h1>

                                    <p className=''>Nivel de Dificultad:</p>
                                    <div>
                                        {[...Array(5)].map((star, index) => {
                                            const currentRating = index + 1;

                                            return(
                                                <label key={index}>
                                                    <input
                                                    className='hidden'
                                                    type="radio"
                                                    name='ratingDif'
                                                    value={currentRating}
                                                    onChange={(event) => {
                                                        setRatingDif(currentRating);
                                                        setRetro({...retro, dif:event.target.value})
                                                    }}
                                                    />

                                                    <span
                                                    className='text-4xl m-2'
                                                    style={{ color: currentRating <= (hoverDif || ratingDif) ? "#000000" : "#BDBDBD" }}
                                                    onMouseEnter={() => setHoverDif(currentRating)}
                                                    onMouseLeave={() => setHoverDif(null)}
                                                    >
                                                        &#9733;
                                                    </span>
                                                </label>
                                            )
                                        })}
                                    </div>

                                    <p className='mt-2'>Nivel de Agrado:</p>
                                    <div>
                                        {[...Array(5)].map((star, index) => {
                                            const currentRating = index + 1;

                                            return(
                                                <label key={index}>
                                                    <input
                                                    className='hidden'
                                                    type="radio"
                                                    name='ratingDif'
                                                    value={currentRating}
                                                    onChange={(event) => {
                                                        setRatingAgr(currentRating);
                                                        setRetro({...retro, agr:event.target.value});
                                                    }}
                                                    />

                                                    <span
                                                    className='text-4xl m-2'
                                                    style={{ color: currentRating <= (hoverAgr || ratingAgr) ? "#000000" : "#BDBDBD" }}
                                                    onMouseEnter={() => setHoverAgr(currentRating)}
                                                    onMouseLeave={() => setHoverAgr(null)}
                                                    >
                                                        &#9733;
                                                    </span>
                                                </label>
                                            )
                                        })}
                                    </div>

                                    <p className='mt-2'>Que Opino:</p>
                                    <textarea className="rounded-md mb-4 px-1 bg-dpurp resize-none h-20" placeholder="Me gusto la tarea porque..." type="text" required onChange={handleOpinion} />

                                    <button type="submit" className="bg-bgrey text-dpurp py-2 px-4 rounded-md hover:bg-blue-600" onClick={sumbitRetro}>Submit</button>
                                </div> 
                            : 
                                <div className='bg-mpurp text-twhite rounded-lg flex flex-col justify-center items-center p-5'>
                                    <h1 className='text-2xl mb-5'>Tarea Completada!</h1>
                                    <p className='mb-5'>Da Click Para Completar Entrega</p>
                                    <button className="bg-bgrey text-dpurp py-2 px-4 rounded-md hover:bg-blue-600" onClick={sumbitRetro}>Sumbit</button>
                                </div>
                            }
                        </form>
                    </Popup>
                </div>
            </div>
        </>
    )
}

Tarea.propTypes = {
    id: PropTypes.number,
    clase: PropTypes.string,
    nombre: PropTypes.string,
    desc: PropTypes.string,
    priori: PropTypes.number,
    fecha: PropTypes.string,
    remove: PropTypes.func
}