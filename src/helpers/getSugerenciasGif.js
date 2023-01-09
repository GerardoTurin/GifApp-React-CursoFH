

const getSugerenciasGif = async (termino) => {
    const url = `https://api.giphy.com/v1/tags/related/term=${termino}?api_key=CFrG8O3wFTev8WpchOJvEwzS1WR54ymi&limit=5`
    const resp = await fetch(url)
    const { data } = await resp.json()

    // acceder al name de cada objeto
    const sugerencias = data.map( sug => sug.name);
    return sugerencias;
}




export default getSugerenciasGif