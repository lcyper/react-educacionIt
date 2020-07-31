import React from 'react'
// import { connect } from 'react-redux'

const ListadoUsuarios = ({usuarios, modificarUsuario, borrarUsuario}) => {
    // console.log(usuarios)
    return (
        <div>
            <h3>Listado de usuarios</h3>
            <ul>
                {usuarios.usuarios.length
                ? usuarios.usuarios.map((usuario,i)=>
                    <li key={i} data-ref={i}  >{usuario.nombre} {usuario.apellido}
                    <button onClick={modificarUsuario} className="material-icons">create</button>
                    <button onClick={borrarUsuario}  className="material-icons">delete</button>
                    </li>
                )  
                : <li>No hay ningun usuario</li> }
            </ul>
        </div>
    )
}

export default ListadoUsuarios
// export default connect()(ListadoUsuarios)
