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

function playRound() {
  playerSelection = prompt("Please enter your selection").toLowerCase();

  computerSelection = getComputerChoice().toLowerCase();

  let declaration;
  let playerResult;

  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      declaration = "It's a draw!";
      console.log(declaration);
      playerResult = "draw";
      return playerResult;
    } else if (computerSelection === 'paper') {
      declaration = "You lose! Paper beats Rock";
      console.log(declaration);
      playerResult = "lose";
      return playerResult;
    } else {
      declaration = "You win! Rock beats scissor";
      console.log(declaration);
      playerResult = "win";
      return playerResult;
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      declaration = "You win! Paper beats Rock";
      console.log(declaration);
      playerResult = "win";
      return playerResult;
    } else if (computerSelection === 'paper') {
      declaration = "It's a draw!";
      console.log(declaration);
      playerResult = "draw";
      return playerResult;
    } else {
      declaration = "You lose! Scissor beats paper";
      console.log(declaration);
      playerResult = "lose";
      return playerResult;
    }
  } else { // playerSelection = 'scissor' in this case
    if (computerSelection === 'rock') {
      declaration = "You lose! Rock beats scissor";
      console.log(declaration);
      playerResult = "lose";
      return playerResult;
    } else if (computerSelection === 'paper') {
      declaration = "You win! Scissor beats paper";
      console.log(declaration);
      playerResult = "win";
      return playerResult;
    } else {
      declaration = "It's a draw!";
      console.log(declaration);
      playerResult = "draw";
      return playerResult;
    }
  }
}

function game() {
  let numberOfRounds = 0;
  let playerScore = 0;
  let computerScore = 0;
  while (numberOfRounds < 5) {
    let result = playRound();
    switch (result) {
      case 'win':
        playerScore += 1;
        break;
      case 'lose':
        computerScore += 1;
        break;
      case 'draw':
        break;
    }
    numberOfRounds += 1;
  }

  if (playerScore > computerScore) {
    console.log("You are the winner!");
  } else if (playerScore < computerScore) {
    console.log("Computer is the winner!");
  } else {
    console.log("It's a draw!");
  }
}

game();
