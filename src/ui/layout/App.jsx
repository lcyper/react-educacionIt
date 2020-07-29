import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import Contador from '../componentes/Contador'
import Usuarios from '../componentes/Usuarios'


class App extends React.Component {

    constructor() {
        //React.Component.call(this)
        super()
        //Inicializo el estado de mi componente
        this.state = {
            links: ["home", "articulos", "perfil"],
            contador: 0,
            contador2: 0,
            usuarios: {
                nombre: "",
                apellido: "",
                usuarios: [{ nombre: "juan", apellido: "rodriguez" },
                { nombre: "pepe", apellido: "furia" },
                { nombre: "javier", apellido: "paler" },
                { nombre: "leivi", apellido: "cyper" },
                { nombre: "mendel", apellido: "figol" }],
                editarUsuario: false
            },
        }
        //this.aumentarContador = this.aumentarContador.bind(this)
    }
    //esta funcion agrega usuarios o modifica en caso de que ya existan
    agregarUsuario = e => {
        e.preventDefault()
        //[true/false, index] para actualizar usuario
        let usuarios = { ...this.state.usuarios };
        if (this.state.usuarios.editarUsuario[0]) {
            console.log("editando usuario")
            let index = this.state.usuarios.editarUsuario[1];
            //actualizando usuarios espesifico
            usuarios.usuarios[index] = { nombre: this.state.usuarios.nombre, apellido: this.state.usuarios.apellido }
            usuarios.editarUsuario = false;
        } else {
            usuarios.usuarios.push({
                nombre: this.state.usuarios.nombre,
                apellido: this.state.usuarios.apellido
            })
        }
        //dos formas de hacer copia de un array u objeto
        //let copia_usuarios = this.state.usuarios.slice(0)
        //let copia_usuarios = [...this.state.usuarios,usuario] 
        usuarios.nombre = "";
        usuarios.apellido = "";
        this.setState({usuarios})
    }

    modificarValor = (e) => {
        let value = e.target.value;
        let tipo = e.target.id;
        // console.log(tipo, value)
        let usuarios = { ...this.state.usuarios }
        usuarios[tipo] = value;
        // console.log(usuarios);
        // let usuarios[tipo] = {value} ;
        this.setState({ usuarios })
    }
    modificarUsuario = (e) => {
        //pasa lo guardado en state a los inputs
        let usuarios = {...this.state.usuarios}
        let index = e.target.dataset.ref;
        usuarios.editarUsuario = [true, index]
        console.log(this.state.usuarios.usuarios[index])
        usuarios.nombre = this.state.usuarios.usuarios[index].nombre
        usuarios.apellido = this.state.usuarios.usuarios[index].apellido
        // this.setState({usuarios : this.state.usuarios.usuarios[index]})
        this.setState({usuarios})
        // console.log(this.state.usuarios)
        //.dataset.ref
        // this.state.usuarios[]
    }


    manejarContador = (nombreContador, num) => {
        let value;
        switch (num) {
            case 1:
                value = this.state[nombreContador] + 1;
                break;

            case -1:
                value = this.state[nombreContador] - 1;
                break;

            default:
                value = 0;
        }
        this.setState({ [nombreContador]: value });
    }

    render() {
        let { links, contador, contador2, usuarios } = this.state
        return (
            <>
                <Header links={links} />
                <Main />

                <Contador
                    manejarContador={this.manejarContador}
                    contador={contador} />

                {
                    (contador >= 3) ?
                        <Contador
                            manejarContador={this.manejarContador}
                            contador={contador2}
                            nombre="contador2" />
                        : null
                }
                <hr />

                <Usuarios
                    agregarUsuario={this.agregarUsuario}
                    modificarValor={this.modificarValor}
                    usuarios={usuarios}
                    modificarUsuario={this.modificarUsuario}
                />
                {/* 
                <Usuarios 
                    agregarUsuario={this.agregarUsuario} 
                    usuarios={usuarios}
                    mostrarFormulario={false}
                /> */}
                <Footer />
            </>
        )
    }
}

export default App

