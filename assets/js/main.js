
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





// função mostra a tela ao clicar na imagen do pokemon
// const contentPokemons = document.querySelector('.main__content__pokemons')
// 
// 





// contentPokemons.addEventListener('click', event=>{ 
//     const namePokemonClicked = event.target.textContent
//     console.log(namePokemonClicked);

//     pokeApi.getpokemons(0, 6).then((pokemons = []) => { 
        
       
   
        
//         console.log(pokemons[0].name === namePokemonClicked);
        
//      })


// })

// contentPokemons.addEventListener('click', event =>{
//     const clickedElement = event.target
//     const nnnn = event.target.textContent
//     screenName(nnnn)
    
//     if(clickedElement.nodeName === 'IMG'){
//         showPokemonScreen.style.display = 'block'
//     }
// })


// ----------------------------------

const showPokemonScreen = document.querySelector('.container__pokemon')
const btnPrevious = document.querySelector('#js-btn-previous')
const containerPokes = document.querySelector('.main__content__pokemons')

containerPokes.addEventListener('click', event =>{
   if(event.target.nodeName === 'P'){
        showPokemonScreen.style.display = 'block'
   }
   const namePoke = event.target.innerHTML
   pokeClik(namePoke)
})

function newScreenPoke(pokemon){
    console.log(pokemon);
    Array.from(pokemon).forEach(poke =>{
        const nameInfos = document.querySelector('.pokemon__infos__name h2')
        const spanInfos = document.querySelector('.pokemon__infos__name span')
        const imgs = document.querySelector('.pokemon__select__images')
        const spanTypes = document.querySelector('.pokemon__infos')
        imgs.innerHTML = `
            <img src="${poke.photo}" alt="bulba">
            <img class="pokemon__pokebola" src="assets/imagens/img-mobile/pokebola-tranparent.svg" alt="pokebola-tranparent">
        `
        nameInfos.innerHTML = `<h2>${poke.name}</h2>`
        spanInfos.innerHTML = `<span>#${poke.number}</span>`
       
    })
   
}

function pokeClik(namePokeClicked){
    



    pokeApi.getpokemons(0, 50).then((pokemons = []) => { 
        const pokeClicked = pokemons.filter(pokemon => pokemon.name === namePokeClicked)
        newScreenPoke(pokeClicked)
      
     })
    
}

btnPrevious.addEventListener('click',()=>{
    showPokemonScreen.style.display = 'none'
})




function loadMorePokemons(offset, limit){
    pokeApi.getpokemons(offset, limit).then((pokemons = []) => { 
        
        const newlist = pokemons.map(pokemon => convertPokemonToHtml(pokemon))
        const newHtml = newlist.join('')
        pokemonList.innerHTML += newHtml
       
        
        // if(pokemons[0].name === returnNamePokemon()){
        //     console.log('é igual');
        // }
        // console.log(pokemons[0].name); 
      
     })
     
}

loadMorePokemons(offset,limit)
btnMorePokemon.addEventListener('click', ()=>{
    offset += limit
    loadMorePokemons(offset, limit)
})