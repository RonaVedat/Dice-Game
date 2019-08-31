const images = document.querySelectorAll("img");
const winMessage = document.querySelector("h1");


function diceGame(min = 1, max = 6) {
  let p1 = Math.floor(Math.random() * (+max - +min) + min);
  let p2 = Math.floor(Math.random() * (+max - +min) + min);

  images[0].setAttribute("src", `images/dice${p1}.png`);
  images[1].setAttribute("src", `images/dice${p2}.png`);

  if(p1 > p2) {
    winMessage.textContent = "Player 1 Wins!";
  } else if(p2 > p1) {
    winMessage.textContent = "Player 2 Wins!";
  } else if(p1 === p2) {
    winMessage.textContent = "Draw! Try again";
  }
}
