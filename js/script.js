const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const botão = document.querySelector('.game-over');
const restart = document.querySelector('.yes');

const jump = ()=> {
    mario.classList.add('jump');
    setTimeout(()=> {
        
     mario.classList.remove('jump');
    }, 500);
}
const loop = setInterval(()=> {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); 

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        botão.style.display = 'block';
        restart.style.display = 'block';
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${pipePosition}px`;
        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';


    clearInterval(loop);
    }
}, 10)
document.addEventListener('keydown', jump);
