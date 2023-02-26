
// const offset = 0
// const limit = 10
// const urlApiPokemon = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`



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