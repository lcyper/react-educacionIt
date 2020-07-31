import React from 'react'
import FormularioUsuarios from "./FormularioUsuarios"
import ListadoUsuarios from "./ListadoUsuarios"
//{usuarios,agregarUsuario,mostrarFormulario=true}
const Usuarios = ({ agregarUsuario, modificarValor, modificarUsuario, borrarUsuario, usuarios, cancelarEditarUsuario, mostrarFormulario = true }) => {
    //params = {agregarUsuario:?,usuarios:?}
    //let agregarUsuario = params.agregarUsuario
    //let usuarios = params.usuarios
    //let {agregarUsuario,usuarios} = params
    return (
        <>
            {mostrarFormulario
                ? <FormularioUsuarios
                    usuarios={usuarios}
                    agregarUsuario={agregarUsuario}
                    modificarValor={modificarValor}
                    cancelarEditarUsuario={cancelarEditarUsuario}
                />
                : null}
            <ListadoUsuarios
                usuarios={usuarios}
                modificarUsuario={modificarUsuario}
                borrarUsuario={borrarUsuario} />
        </>
    )
}



export default Usuarios
