const btnTop = document.querySelector('.js-btn-top')

document.addEventListener('scroll', btnHidden)

function btnHidden(){
    if(window.scrollY > 10){
        btnTop.style.display = 'block'
    }else{
        btnTop.style.display = 'none'
        
    }
}

btnHidden()