
import { useState ,useEffect } from 'react'
import getGifs from '../helpers/getGifs'

const useFetchGifs = (categoria) => {

    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(categoria)
        setImages(newImages)
        setLoading(false)
    }
    
    useEffect(() => {
        getImages()
    }, [])



    return {
        images,
        loading
    }
}

export default useFetchGifs