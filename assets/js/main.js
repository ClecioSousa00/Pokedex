


const pokemonList = document.querySelector('#pokemonList')
const btnMorePokemon = document.querySelector('#js-btn-more')
const limit = 9
let offset = 0

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



function loadMorePokemons(offset, limit){
    pokeApi.getpokemons(offset, limit).then((pokemons = []) => { 
        
        const newlist = pokemons.map(pokemon => convertPokemonToHtml(pokemon))
        const newHtml = newlist.join('')
        pokemonList.innerHTML += newHtml
     })
     
}

loadMorePokemons(offset,limit)
btnMorePokemon.addEventListener('click', ()=>{
    offset += limit
    loadMorePokemons(offset, limit)
})


    




