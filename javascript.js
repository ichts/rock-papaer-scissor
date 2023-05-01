function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      choice = "rock";
      break;
    case 1:
      choice = "paper";
      break;
    case 2:
      choice = "scissor";
      break;
  }
  return choice;
}

let numberOfRounds = 0;
let playerScore = 0;
let computerScore = 0;
let finalResult;

function playRound(playerSelection) {
  let computerSelection = getComputerChoice().toLowerCase();


  console.log(`player selects: ${playerSelection}; computer selects: ${computerSelection}`);
  let declaration;
  let playerResult;

  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      playerResult = "draw";
    } else if (computerSelection === 'paper') {
      playerResult = "lose";
    } else {
      playerResult = "win";
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      playerResult = "win";
    } else if (computerSelection === 'paper') {
      playerResult = "draw";
    } else {
      playerResult = "lose";
    }
  } else { // playerSelection = 'scissor' in this case
    if (computerSelection === 'rock') {
      playerResult = "lose";
    } else if (computerSelection === 'paper') {
      playerResult = "win";
    } else {
      playerResult = "draw";
    }
  }

  switch (playerResult) {
    case 'win':
      declaration = 'You win this round!';
      playerScore += 1;
      numberOfRounds += 1;
      break;
    case 'lose':
      declaration = 'You lose this round!';
      computerScore += 1;
      numberOfRounds += 1;
      break;
    case 'draw':
      declaration = "It's a draw this round!";
      numberOfRounds += 1;
      break;
  }
  score.textContent = `player score: ${playerScore} computer score: ${computerScore}\n rounds: ${numberOfRounds}`;

  roundResult.textContent = declaration;
  if (numberOfRounds === 5) {
    if (playerScore > computerScore) {
      finalResult = 'Player wins!';
    } else if (playerScore < computerScore) {
      finalResult = 'Computer wins!';
    } else {
      finalResult = "It's a draw!"
    }
    final.textContent = finalResult;
    numberOfRounds = 0;
    playerScore = 0;
    computerScore = 0
  }
}

const rockButton = document.querySelector('#rock')
rockButton.addEventListener('click', function(e) {
  playRound(e.target.textContent.toLowerCase());
});

const paperButton = document.querySelector('#paper')
paperButton.addEventListener('click', function(e) {
  playRound(e.target.textContent.toLowerCase());
});

const scissorButton = document.querySelector('#scissor')
scissorButton.addEventListener('click', function(e) {
  playRound(e.target.textContent.toLowerCase());
});
const roundResult = document.querySelector('#result');
const score = document.querySelector('#score');

const final = document.querySelector('#finalResult');
