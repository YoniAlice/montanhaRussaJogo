//JOGADOR
const player = document.querySelector(".player");
const obstaculo = document.querySelector(".obstaculo");
const perdido = document.querySelector(".perdeu");

//GAME START

function StartGame(){
    if(player != 'animP'){
        player.classList.add('animP');
    }
    
    setTimeout(function(){
        player.classList.remove('animP');
    },600)
};

const perdeuJogo = setInterval(function(){
    let croseY = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    let croseX = parseInt(window.getComputedStyle(obstaculo).getPropertyValue('left'));

    
    console.log(croseY)
    if(croseX < 140 && croseX > 100 & croseY >=200){
        obstaculo.style.animation = 'stop';
        perdido.classList.add('perdeuMesmo')
    }
})
