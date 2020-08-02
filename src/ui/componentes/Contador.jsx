import React from "react"

let Contador = ({ contador, manejarContador,nombre = "contador"}) => {
    return (
<<<<<<< HEAD
        <div className="contador">
=======
        <>
>>>>>>> d1d3f1e6eff0a3069bc88b68f603990657574465
            <p>{nombre} : {contador}</p>
            <button onClick={manejarContador.bind(null, nombre, -1)}>-</button>
            <button onClick={manejarContador.bind(null, nombre, 0)}>resetear</button>
            <button onClick={manejarContador.bind(null, nombre, 1)} >+</button>
<<<<<<< HEAD
        </div>
=======
        </>
>>>>>>> d1d3f1e6eff0a3069bc88b68f603990657574465
    )
}

export default Contador
