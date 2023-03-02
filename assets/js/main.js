
// const offset = 0
// const limit = 10
// const urlApiPokemon = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

// function convertPokemonTypesToHtml(pokemonTypes){
//     return pokemonTypes.map(pokemonType => `<span>${pokemonType.type.name}</span>`)
// }

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


const t = document.querySelector('.main__content__pokemons')
const showPokemonScreen = document.querySelector('.container__pokemon')
const btnPrevious = document.querySelector('#js-btn-previous')


t.addEventListener('click', event =>{
    const clickedElement = event.target
    if(clickedElement.nodeName === 'IMG'){
        showPokemonScreen.style.display = 'block'
    }
})

btnPrevious.addEventListener('click',()=>{
    showPokemonScreen.style.display = 'none'
})

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