import PropTypes from 'prop-types'

export default function Tarea(props){
    
    const tareaObj = props;
    console.log(tareaObj)

    return(
        <>
            <div className="bg-bwhite flex flex-auto items-center rounded-xl text-tpurp text-xl mt-2 h-10">
                
                <p className="w-1/5 pl-2">{tareaObj.prop.nombre}</p>
                
                <button className="w-1/5 py-1" >ⓘ</button>
                
                <p className="w-1/5 text-center ">{tareaObj.prop.priori}</p>
                
                <p className="w-1/5 text-center ">{tareaObj.prop.fecha}</p>
                
                <div className="w-1/5  flex justify-center items-center">
                    <button className="rounded-lg px-2 py-1 mx-1 bg-bgrey h-9 w-9">✔</button>
                    <button className="rounded-lg px-2 py-1 mx-1 bg-bgrey h-9 w-9">✘</button>
                </div>
            </div>
        </>
    )
}

Tarea.PropTypes = {
    id: PropTypes.number,
    nombre: PropTypes.string,
    desc: PropTypes.string,
    priori: PropTypes.number,
    fecha: PropTypes.string
}