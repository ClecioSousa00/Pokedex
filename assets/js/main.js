
// const offset = 0
// const limit = 10
// const urlApiPokemon = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

// function convertPokemonTypesToHtml(pokemonTypes){
//     return pokemonTypes.map(pokemonType => `<span>${pokemonType.type.name}</span>`)
// }

function convertPokemonToHtml(pokemon){
    return `
        <div class="pokemon ${pokemon.type}">
            <div class="pokemon__name">
                <p>${pokemon.name}</p>
                <span>#${pokemon.number}</span>
            </div>
        
            <div class="pokemon__details">
                <div class="pokemon__type">
                    ${pokemon.types.map(type => `<span>${type}</span>`).join('')}
                </div>
                <img class="pokemon__image" src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
            <div class="pokemon__pokebola">
                <img src="assets/imagens/img-mobile/pokebola-tranparent.svg" alt="pokebola transparente">
            </div>
        </div>
    `
}


const pokemonList = document.querySelector('#pokemonList')



pokeApi.getpokemons().then((pokemons = []) => { 
   
   const newlist = pokemons.map(pokemon => convertPokemonToHtml(pokemon))
   
   const newHtml = newlist.join('')
   pokemonList.innerHTML = newHtml
   
    // const listItems = []

    // Array.from(pokemons).forEach(pokemon =>{
    //       listItems.push(convertPokemonToHtml(pokemon))  
    //     // pokemonList.innerHTML += convertPokemonToHtml(pokemon)
    // })
    // console.log(listItems);
})