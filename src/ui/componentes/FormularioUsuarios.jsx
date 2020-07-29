import React from 'react'



const FormularioUsuarios = ({agregarUsuario,usuarios,modificarValor}) => {
    return (
        <>
            <form onSubmit={agregarUsuario}>
                <div>
                    <input id="nombre" onChange={modificarValor}  type="text" value={usuarios.nombre} placeholder="Nombre"/>
                </div>
                <div>
                    <input id="apellido" onChange={modificarValor} type="text" value={usuarios.apellido} placeholder="Apellido"/>
                </div>
                <button>Guardar</button>
            </form>
        </>
    )
}




export default FormularioUsuarios
