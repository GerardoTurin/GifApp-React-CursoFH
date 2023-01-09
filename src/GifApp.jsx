import React, { useState } from 'react'
import { AgregarCategoria, GifGrid } from './components'

const GifApp = () => {
    const [ categorias, setCategorias ] = useState(['Dragon Ball'])

    const onAddCategoria = ( newCategoria ) => {

        // capitaliza la primera letra de cada palabra de la categoria.
        newCategoria = newCategoria.split(' ').map( palabra => palabra[0].toUpperCase() + palabra.slice(1) ).join(' ')

        // No permite agregar categorias repetidas.
        if ( categorias.includes( newCategoria ) ) {
            alert('La categoria ya existe')
            return
        };

        setCategorias( [ newCategoria ,...categorias ] )        
    }


    return (
        <>
            {/* Titulo */}
            <h1>GifApp</h1>

            {/* Formulario - input */}
            <AgregarCategoria 
                onAddCategoria={ onAddCategoria }
            />

            {/* Lista de categorias */}
                { categorias.map( categoria => (
                    <GifGrid key={categoria} categoria={categoria} />
                    ))
                }

            {/* Git Item */}
        </>
    )
}

export default GifApp