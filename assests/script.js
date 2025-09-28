//JOGADOR
const player = document.querySelector(".player");
const obstaculo = document.querySelector(".obstaculo");
const perdido = document.querySelector(".perdeu");
const restart = document.querySelector(".restart");
//GAME START

function StartGame(){
    perdido.classList.remove('perdeuMesmo');
    obstaculo.classList.add('aniO'); //ANIMAÇÃO DO OBJETO
    setInterval(moverTrilho,0.2);
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

//MOVIMENTO DO CENÁRIO
var trilhos = document.querySelector(".trilhos")
var trilhoUm = document.querySelector(".trilho");
var trilhoDois = trilhos.querySelector(':scope > :nth-child(2)');
let velocidadeDoTrilhoUm = 0.1
let velocidadeDoTrilhoDois = 99;

function moverTrilho(){ //MOVE O TRILHO PRA ESQUERDA

    //Velocidade dos Trilhos

    velocidadeDoTrilhoUm += -0.13; 
    trilhoUm.style.left = velocidadeDoTrilhoUm +"%"; 

    velocidadeDoTrilhoDois += -0.13;
    trilhoDois.style.left = velocidadeDoTrilhoDois +"%";

    // Remove e Adiciona o primeiro Trilho
    
    if(velocidadeDoTrilhoUm <= -101){ 
        trilhos.removeChild(trilhoUm)
        velocidadeDoTrilhoUm = 99;
        trilhos.appendChild(trilhoUm)
    }

    // Remove e Adiciona o segundo Trilho
    
        if(velocidadeDoTrilhoDois <= -101){ 
        trilhos.removeChild(trilhoDois)
        velocidadeDoTrilhoDois = 99;
        trilhos.appendChild(trilhoDois)
    }

}


