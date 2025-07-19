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
    return "draw";
  }
  if (playerSelection == "rock" && computerSelection == "scissors"
      || playerSelection == "paper" && computerSelection == "rock"
      || playerSelection == "scissors" && computerSelection == "paper"
      ) {
        return "win";
  }
  
  return "lose";
}

function game() {
  for (let i = 0; i < 5; ++i) {
    console.log(playRound(prompt("Select: \nrock, paper or scissors"), computerPlay()));
  }
}

const body = document.querySelector('body');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const resultElement = document.querySelector('#result');
const winnerElement = document.querySelector('#winner');
let winner = "";

function checkWin(playerScore, computerScore) {
  if (playerScore == 5) {
    return "player";
  }

  if (computerScore == 5) {
    return "computer";
  }

  return "";
}


body.addEventListener("click", (event) => {

  if (winner) {
    return;
  }

  const playerSelection = event.target.textContent.toLowerCase();
  const computerSelection = computerPlay();
  
  if (event.target.localName == 'button') {
    const result = playRound(playerSelection, computerSelection);

    switch(result) {
      case 'draw':
        resultElement.textContent = 'Draw!';
        break;
      case 'win':
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        resultElement.textContent = `Player +1 Score! ${playerSelection} beats ${computerSelection}`;
        
        break;
      case 'lose':
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        resultElement.textContent = `Computer +1 Score! ${computerSelection} beats ${playerSelection}`;
        break;
    }

    winner = checkWin(parseInt(playerScore.textContent), parseInt(computerScore.textContent));

    if (winner) {
      winnerElement.textContent = `${winner} Wins`;
    }
  }

});



//game();

// For Test
// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));
