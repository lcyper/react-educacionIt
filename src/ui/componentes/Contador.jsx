import React from "react"

let Contador = ({ contador, manejarContador,nombre = "contador"}) => {
    return (
        <div className="contador">
            <p>{nombre} : {contador}</p>
            <button onClick={manejarContador.bind(null, nombre, -1)}>-</button>
            <button onClick={manejarContador.bind(null, nombre, 0)}>resetear</button>
            <button onClick={manejarContador.bind(null, nombre, 1)} >+</button>
        </div>
    )
}

export default Contador
