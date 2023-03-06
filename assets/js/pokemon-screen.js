
const showPokemonScreen = document.querySelector('.container__pokemon')
const btnPrevious = document.querySelector('#js-btn-previous')
const containerPokes = document.querySelector('.main__content__pokemons')
const msgError = document.querySelector('#js-msg-error')
containerPokes.addEventListener('click', event =>{
   
    if(event.target.nodeName === 'IMG'){
        const namePoke = event.target.alt
        pokeClik(namePoke)
        
   }
  
})

function newScreenPoke(pokemon){
    
    showPokemonScreen.setAttribute( 'class',  'container__pokemon')
    showPokemonScreen.classList.add(`${pokemon.type}`)
    
    showPokemonScreen.innerHTML = `
        <div class="container__pokemon__select">
            <div class="pokemon__select__header">
                <button onclick="backPokedex()" id="js-btn-previous"><span class="material-symbols-outlined">navigate_before</span> Pokédex</button>
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
    showPokemonScreen.style.display = 'block'
}

function pokeClik(namePokeClicked){
    pokeApi.getpokemons(0, 151).then((pokemons = []) => { 
        // const pokeClicked = pokemons.filter(pokemon => pokemon.name === namePokeClicked)
        // newScreenPoke(pokeClicked)
        const teste = pokemons.findIndex(po => po.name === namePokeClicked)
        if(teste === -1){
            msgError.innerHTML = `${namePokeClicked} não existe, digite novamente o nome do Pokémon`
            
        }else{
            newScreenPoke(pokemons[teste])
            msgError.innerHTML = ''
        }
        
     })
}


function backPokedex(){
    // showPokemonScreen.innerHTML = ''
    showPokemonScreen.style.display = 'none' 
}