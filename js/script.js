let computerMove = "unknown";

let moveRandomiser = Math.floor(Math.random() * 3 + 1);

console.log("Generated number is " + moveRandomiser);

if (moveRandomiser == 1) {
  computerMove = "rock";
} else if (moveRandomiser == 2) {
  computerMove = "paper";
} else {
  computerMove = "scissors";
}

let playerInput = prompt("Enter your move! 1: rock, 2: paper, 3: scissors.");

console.log("Player entered: " + playerInput);

let playerMove = "unknown";

if (playerInput == 1) {
  playerMove = "rock";
} else if (playerInput == 2) {
  playerMove = "paper";
} else {
  playerMove = "scissors";
}
