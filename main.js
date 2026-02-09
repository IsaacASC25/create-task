const rps = ["Rock", "Paper", "Scissors"]
const rpsi = document.querySelector(".rpsi");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

function randomize(deck) {
  let random = Math.floor(Math.random() * 3);
  let bigdawg = deck[random];
  return bigdawg;
}

function computer(rps){
  let comprandom = randomize(rps)
  return comprandom
}

scissors.addEventListener("click", function(){
game("Scissors");
})

rock.addEventListener("click", function(){
game("Rock");
})

paper.addEventListener("click", function(){
game("Paper");
})

function game(user){
  let computerChoice = computer(rps)
  rpsi.innerHTML = `You chose: ${user} <br><br> Computer chose: ${computerChoice}`;
  if (user === computerChoice){
    rpsi.innerHTML += "<br><br>It's a tie!"
  } else if ((user === "Rock" && computerChoice === "Scissors") || 
    (user === "Paper" && computerChoice === "Rock") ||
    (user === "Scissors" && computerChoice === "Paper")
  ){
    rpsi.innerHTML += "<br><br>You win!"
  } else {
    rpsi.innerHTML += "<br><br>You lose!"
  }
}

