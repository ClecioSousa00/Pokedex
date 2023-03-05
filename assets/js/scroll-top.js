const btnTop = document.querySelector('.js-btn-top')
console.log(btnTop);
document.addEventListener('scroll', btnHidden)

function btnHidden(){
    if(window.scrollY > 10){
        btnTop.style.display = 'block'
    }else{
        btnTop.style.display = 'none'
        console.log('opa');
    }
}

btnHidden()