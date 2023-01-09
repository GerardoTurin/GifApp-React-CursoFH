import React, { useState, useEffect } from 'react';
import useFetchSugerencias from '../hooks/useFetchSugerencias';

const AgregarCategoria = ({ onAddCategoria }) => {
    const [inputValue, setInputValue] = useState('');
    const [sugestiones, setSugestiones] = useState([]);

    const { sugerencias, loading, error } = useFetchSugerencias(inputValue);

    useEffect(() => {
        setSugestiones(sugerencias);
    }, [sugerencias]);

    const onInputChange = (evt) => {
        const termino = evt.target.value;
        setInputValue(termino);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onAddCategoria(inputValue.trim());
        setInputValue('');
        setSugestiones([]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Busca tus gifs"
                value={inputValue}
                onChange={onInputChange}
            />
            {error && <p>Hubo un error al cargar las sugerencias</p>}
            {loading && <p>Cargando sugerencias...</p>}
            {sugestiones.length > 0 && inputValue.trim() !== '' && (
                <ul className="sugestiones">
                    {sugestiones.map((sugerencia) => (
                        <li key={sugerencia}>
                            <a
                                type="button"
                                onClick={() => {
                                    onAddCategoria(sugerencia);
                                    setInputValue('');
                                    setSugestiones([]);
                                }}
                            >
                                {sugerencia}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </form>
    );
};

export default AgregarCategoria;