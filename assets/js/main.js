
const offset = 0
const limit = 20
const urlApiPokemon = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`



function convertPokemonToHtml(pokemon){
    return `
        <div class="pokemon">
            <div class="pokemon__name">
                <p>${pokemon.name}</p>
                <span>#001</span>
            </div>
        
            <div class="pokemon__details">
                <div class="pokemon__type">
                    <span>Grass</span>
                    <span>Poison</span>
                </div>
                <img class="pokemon__image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>
            <div class="pokemon__pokebola">
                <img src="assets/imagens/img-mobile/pokebola-tranparent.svg" alt="pokebola transparente">
            </div>
        </div>
    `
}


const pokemonList = document.querySelector('#pokemonList')



fetch(urlApiPokemon)
    .then(response => response.json())
    .then(jsonBody => jsonBody.results)
    .then(pokemons => {
        
        Array.from(pokemons).forEach(pokemon =>{
            
            pokemonList.innerHTML += convertPokemonToHtml(pokemon)
        })
    })
    .catch(error => console.error(error))