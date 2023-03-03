


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





const showPokemonScreen = document.querySelector('.container__pokemon')
const btnPrevious = document.querySelector('#js-btn-previous')
const containerPokes = document.querySelector('.main__content__pokemons')

containerPokes.addEventListener('click', event =>{
   if(event.target.nodeName === 'P'){
        showPokemonScreen.style.display = 'block'
        const namePoke = event.target.innerHTML
        pokeClik(namePoke)
   }
  
})

function newScreenPoke(pokemon){
    
    const screeNewPoke = document.querySelector('.container__pokemon')
    
    screeNewPoke.setAttribute( 'class',  'container__pokemon')
    screeNewPoke.classList.add(`${pokemon.type}`)
    
    screeNewPoke.innerHTML = `
        <div class="container__pokemon__select">
            <div class="pokemon__select__header">
                <button onclick="myFunction()" id="js-btn-previous"><span class="material-symbols-outlined">navigate_before</span> Pokédex</button>
                <a  class="nav__logo" href="index.html"><img src="assets/imagens/img-mobile/logo-pokemon.svg" alt="logo Pokemon"></a>
            </div>
            <div class="pokemon__select__images">
                <img src="${pokemon.photo}" alt="${pokemon.name}">
                <img class="pokemon__pokebola" src="assets/imagens/img-mobile/pokebola-tranparent.svg" alt="pokebola-tranparent">
            </div>
        </div>

        <div id="js-pokemon-select" class="container__pokemon__infos">
            <div class="pokemon__infos__name">
                <h2>${pokemon.name}</h2>
                <span>#${pokemon.number}</span>
            </div>

            <div class="pokemon__infos__box">
                <div class="pokemon__infos">
                    <h3>Type</h3>
                    ${pokemon.types.map(type =>  `<span>${type}</span>`).join('')}
                </div>
                
                <div class="pokemon__infos">
                    <h3>Skill</h3>
                    ${pokemon.skills.map(skill =>  `<span>${skill}</span>`).join('')}
                    
                </div>
            </div>

            <div class="pokemon__stats">
                <h3>Stats</h3>
                <div class="pokemon__stats__box">
                    ${pokemon.stats.map(stat =>  `
                    <div class="pokemon__stats__box__infos">
                        <span>${stat.stat.name}</span>
                        <span>${stat.base_stat}</span>
                    </div>

                    `).join('')}

                    
                </div>
            </div>
        </div>
    `
}

function pokeClik(namePokeClicked){
    



    pokeApi.getpokemons(0, 151).then((pokemons = []) => { 
        // const pokeClicked = pokemons.filter(pokemon => pokemon.name === namePokeClicked)
        // newScreenPoke(pokeClicked)
        
        const teste = pokemons.findIndex(po => po.name === namePokeClicked)
        newScreenPoke(pokemons[teste])
     })
    
}

// btnPrevious.addEventListener('click',()=>{
//     showPokemonScreen.style.display = 'none'
// })
function myFunction(){
    showPokemonScreen.style.display = 'none'
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