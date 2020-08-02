import React from 'react'
// import { connect } from 'react-redux'

const ListadoUsuarios = ({usuarios, modificarUsuario, borrarUsuario}) => {
    // console.log(usuarios)
    return (
<<<<<<< HEAD
        <div id="listaUsuarios">
=======
        <div>
>>>>>>> d1d3f1e6eff0a3069bc88b68f603990657574465
            <h3>Listado de usuarios</h3>
            <ul>
                {usuarios.usuarios.length
                ? usuarios.usuarios.map((usuario,i)=>
                    <li key={i} data-ref={i}  >{usuario.nombre} {usuario.apellido}
<<<<<<< HEAD
                    <div>
                    <button onClick={modificarUsuario} className="material-icons">create</button>
                    <button onClick={borrarUsuario}  className="material-icons">delete</button>
                    </div>
=======
                    <button onClick={modificarUsuario} className="material-icons">create</button>
                    <button onClick={borrarUsuario}  className="material-icons">delete</button>
>>>>>>> d1d3f1e6eff0a3069bc88b68f603990657574465
                    </li>
                )  
                : <li>No hay ningun usuario</li> }
            </ul>
        </div>
    )
}

export default ListadoUsuarios
// export default connect()(ListadoUsuarios)
