import React from 'react'
import GifItem from './GifItem'
import useFetchGifs from '../hooks/useFetchGifs'

const GifGrid = ({categoria}) => {

    const {images, loading} = useFetchGifs(categoria)

    return (
        <>
            <h3>{categoria}</h3>

            {loading && <p>Cargando...</p>} {/* Si loading es true, muestra el texto 'Cargando...' */}

            <div className='card-grid'>
                { 
                    images.map( img => (
                        <GifItem
                            key={img.id}
                            {...img}    // Estamos enviando todas las propiedades del objeto img en el componente GifItem.
                        />
                    ) )
                }
            </div>

        </>
    )
}



export default GifGrid