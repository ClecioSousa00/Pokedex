const pokeApi = {}

pokeApi.getpokemons = (offset = 0, limit = 10) =>{
    const urlApiPokemon = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(urlApiPokemon)
    .then(response => response.json())
    .then(jsonBody => jsonBody.results)
    .catch(error => console.error(error))
}