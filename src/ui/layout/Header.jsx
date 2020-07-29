import React from 'react'

const Header = ({links}) => {
    return (
        <header>
            <h1>Mi Pagina</h1>               
            <nav>
                {links.map((valor,indice)=>{
                    return <a key={indice} href={`/${valor}`}>{valor}</a>
                })}
            </nav>
        </header>
    )
}

export default Header
