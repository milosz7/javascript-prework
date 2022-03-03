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
