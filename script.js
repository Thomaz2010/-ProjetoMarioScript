const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const game = document.querySelector(".game");
const gameOver = document.querySelector(".game-over");
const start = document.querySelector(".initial");
let elemento = document.querySelector(".placar");
const player = document.querySelector(".music");

let contador = 1;




function refreshPage(){
    window.location.reload();
    var name = prompt("Digite seu nome");
    alert(`${name} -  Vamos Começar? `);
   
   
};


     

const jump = () => {
  elemento.innerHTML = contador++  
  mario.classList.add("jump-mario");
  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
};

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "imagens/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";
    mario.attributes.hidden = false;

    gameOver.removeAttribute("hidden");
    player.removeAttribute("src");
    player.src = player.src;
    clearInterval(loopGame); 
     
  }
  
}, 10); 





document.addEventListener("keydown", jump);

