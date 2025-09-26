//JOGADOR
const player = document.querySelector(".player");
const obstaculo = document.querySelector(".obstaculo");
const perdido = document.querySelector(".perdeu");
const restart = document.querySelector(".restart");
//GAME START

function StartGame(){

    obstaculo.classList.add('aniO'); //ANIMAÇÃO DO OBJETO
};
    
    const perdeuJogo = setInterval(function(){
    let croseY = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    let croseX = parseInt(window.getComputedStyle(obstaculo).getPropertyValue('left'));

    
    //COLISÃO DO OBJETO
    if(croseX < 140 && croseX > 100 & croseY >=200){
        obstaculo.classList.remove('aniO');
        perdido.classList.add('perdeuMesmo');
    }
})

document.addEventListener('click', (e) => {

    let el = e.target;
    if(el.contains(restart)) { //RESTART
        perdido.classList.remove('perdeuMesmo');
        StartGame();
    }
})


//VERIFICADOR DA TECLA
function control(e) {

if (e.key == " " ) { //Tecla espaço
        
    if(player != 'animP'){ //PULO
        player.classList.add('animP');
    }
    
    setTimeout(function(){ // REMOVEPULO
        player.classList.remove('animP');
    },615)
    }
}

document.addEventListener("keydown", control); //Verifica tecla
