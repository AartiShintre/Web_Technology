//Guess Number Game
async function guessGame() {
  let number = Math.floor(Math.random()*10);
  let guess = prompt("Guess number (0-9)");

  if(Number(guess) === number){
    alert("Correct!");
  } else {
    alert("Wrong! Number was " + number);
  }
}
guessGame();