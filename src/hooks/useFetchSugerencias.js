import { useEffect, useState } from 'react'
import getSugerenciasGif from "../helpers/getSugerenciasGif";


const useFetchSugerencias = (termino) => {
    const [sugerencias, setSugerencias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getSugerenciasGif(termino)
            .then(sugerencias => {
                setSugerencias(sugerencias);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [termino]);

    return { sugerencias, loading, error };
};

export default useFetchSugerencias;