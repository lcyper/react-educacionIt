import React from 'react'



const FormularioUsuarios = ({ agregarUsuario, usuarios, modificarValor, cancelarEditarUsuario }) => {
    return (
        <>
            <form onSubmit={agregarUsuario}>
                <div>
                    <input id="nombre" onChange={modificarValor} type="text" value={usuarios.nombre} placeholder="Nombre" required />
<<<<<<< HEAD
                    <input id="apellido" onChange={modificarValor} type="text" value={usuarios.apellido} placeholder="Apellido" required />
                </div>
                {usuarios.editarUsuario ?
                    <>
                        <button>Guardar</button>
                        <button onChange={cancelarEditarUsuario}>Cancelar</button>
                    </>
=======
                </div>
                <div>
                    <input id="apellido" onChange={modificarValor} type="text" value={usuarios.apellido} placeholder="Apellido" required />
                </div>
                {usuarios.editarUsuario ?
                    <><button>Guardar</button><button onChange={cancelarEditarUsuario}>Cancelar</button></>
>>>>>>> d1d3f1e6eff0a3069bc88b68f603990657574465
                    : <button>Agregar</button>}

            </form>
        </>
    )
}




export default FormularioUsuarios
