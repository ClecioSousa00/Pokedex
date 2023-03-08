
const formPokedex = document.querySelector('.pokedex__form')

formPokedex.addEventListener('submit', event =>{
    event.preventDefault()
    const inputValue = event.target.pokemon.value.trim()
    if(inputValue.length){
        pokeClik(inputValue.toLowerCase())
        event.target.reset()
    }
})