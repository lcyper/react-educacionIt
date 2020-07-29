import React from 'react'
// import { connect } from 'react-redux'

const ListadoUsuarios = ({usuarios, modificarUsuario}) => {
    console.log(usuarios)
    return (
        <div>
            <h3>Listado de usuarios</h3>
            <ul>
                {usuarios.usuarios.length
                ? usuarios.usuarios.map((usuario,i)=>
                    <li key={i} data-ref={i} onClick={modificarUsuario} >{usuario.nombre} {usuario.apellido}</li>
                )  
                : <li>No hay ningun usuario</li> }
            </ul>
        </div>
    )
}

export default ListadoUsuarios
// export default connect()(ListadoUsuarios)
