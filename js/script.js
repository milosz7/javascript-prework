let moveRandomiser = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName(moveRandomiser);

console.log("Generated number is " + moveRandomiser);

function getMoveName(moveId) {
  if (moveId == 1) {
    return "rock";
  } else if (moveId == 2) {
    return "paper";
  } else if (moveId == 3) {
    return "scissors";
  } else {
    printMessage(moveId + " is an unknown moveID.");
  }
}

let playerInput = prompt("Enter your move! 1: rock, 2: paper, 3: scissors.");

console.log("Player entered: " + playerInput);

let playerMove = getMoveName(playerInput);

function displayResult(computerMove, playerMove) {
  printMessage(
    "I played " + computerMove + " and you played " + playerMove + " ."
  );

  if (computerMove == playerMove) {
    printMessage("It's a draw!");
  } else if (
    (computerMove == "rock" && playerMove == "paper") ||
    (computerMove == "paper" && playerMove == "scissors") ||
    (computerMove == "scissors" && playerMove == "rock")
  ) {
    printMessage("You win!");
  } else {
    printMessage("You lose!");
  }
}

displayResult(computerMove, playerMove);
