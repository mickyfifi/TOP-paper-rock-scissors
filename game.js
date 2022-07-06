function computerPlay() {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "rock";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return "Draw!";
  }
  if (playerSelection == "rock" && computerSelection == "scissors"
      || playerSelection == "paper" && computerSelection == "rock"
      || playerSelection == "scissors" && computerSelection == "paper"
      ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
  
  return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function game() {
  for (let i = 0; i < 5; ++i) {
    console.log(playRound(prompt("Select: \nrock, paper or scissors"), computerPlay()));
  }
}

game();

// For Test
// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
