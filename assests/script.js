//DADOS
const player = document.querySelector(".player");
const obstaculo = document.querySelector(".obstaculo");
const perdido = document.querySelector(".perdeu");
const restart = document.querySelector(".restart");
const menu = document.querySelector("#menu");
var jogoRodando = false

//GAME START

function StartGame(){
    jogoRodando= true;

    //REMOVE TELAS FORA DO JOGO

    menu.style.display = "none";  // Tela Inicial
    perdido.classList.remove('perdeuMesmo'); //Tela de derrota

    obstaculo.classList.add('aniO'); //ANIMAÇÃO DO OBJETO
    setInterval( moverTrilho,0.2);
    
    
};

function gameOver() { //PARA TUDO

        obstaculo.classList.remove('aniO'); //Para animação do Objeto
        perdido.classList.add('perdeuMesmo'); //Adiciona a tela do gameOver
        jogoRodando = false;
}
    
    const perdeuJogo = setInterval(function(){ //VERIFICA COLISÃO
    let croseY = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    let croseX = parseInt(window.getComputedStyle(obstaculo).getPropertyValue('left'));

    //COLISÃO DO OBJETO
    
    if(croseX < 140 && croseX > 100 & croseY >=200){
        gameOver();
    }
})

document.addEventListener('click', (e) => { //VERIFICA ONDE O CLICK CLICA

    let el = e.target;
    if(el.contains(restart)) { //RESTART  
        StartGame();
    }
})



function control(e) { //VERIFICADOR DA TECLA

if (e.key == " " ) { //Tecla espaço
        
    if(player != 'animP'){ //PULO
        player.classList.add('animP');
    }
    
    setTimeout(function(){ // REMOVEPULO
        player.classList.remove('animP');
    },615)
    }
}

document.addEventListener("keydown", control); //VERIFICA SE TECLOU

//MOVIMENTO DO CENÁRIO
var trilhos = document.querySelector(".trilhos")
var trilhoUm = document.querySelector(".trilho");
var trilhoDois = trilhos.querySelector(':scope > :nth-child(2)');
let velocidadeDoTrilhoUm = 0.1
let velocidadeDoTrilhoDois = 99;
const velocidadeDosTrilhos = 0.13

function moverTrilho(){ //MOVE O TRILHO PRA ESQUERDA
    if(jogoRodando == true){
        
    
    //Velocidade dos Trilhos Um e Dois
        
    velocidadeDoTrilhoUm += - velocidadeDosTrilhos; 
    trilhoUm.style.left = velocidadeDoTrilhoUm +"%"; 

    velocidadeDoTrilhoDois += - velocidadeDosTrilhos;
    trilhoDois.style.left = velocidadeDoTrilhoDois +"%";
}else{
        trilhos.removeChild(trilhoUm)
        velocidadeDoTrilhoUm = 0.1;
        trilhos.appendChild(trilhoUm)

        trilhos.removeChild(trilhoDois)
        velocidadeDoTrilhoDois = 99;
        trilhos.appendChild(trilhoDois)
}

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


