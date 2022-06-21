const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const game = document.querySelector(".game");
const gameOver = document.querySelector(".game-over");


function refreshPage(){
    window.location.reload();
    alert("Deseja iniciar o jogo?")
};


const jump = () => {
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
    clearInterval(loopGame);
    
     
  }
  
}, 10);





document.addEventListener("keydown", jump);
