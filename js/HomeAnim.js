window.addEventListener('scroll', function(){
    let animacion = document.getElementById('carta1');
    let animacion1 = document.getElementById('carta2');
    let animacion2 = document.getElementById('carta3');
    let posicionObjeto = animacion.getBoundingClientRect().top;
    console.log(posicionObjeto);
    let ScreenSize = window.innerHeight/5;

    if(posicionObjeto < ScreenSize){
        animacion.style.animation = 'Movcarta1 1s ease-out'
        animacion1.style.animation = 'Movcarta1 1s ease-out'
        animacion2.style.animation = 'Movcarta1 1s ease-out'
    }


})