 const getUserChoice = userInput => {
	userInput = userInput.toLowerCase();
	if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
		return userInput;
	}
};


const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
      return 'scissors';
	}
}


const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'Game was a tie!';
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer Won!';
    }
    else{
      return 'User Won!';
    }
  }
  else if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Computer Won!';
    }
    else{
      return 'User Won!';
    }
  }
  else{
    if(computerChoice === 'paper'){
      return 'User Won!';
    }
    else{
      return 'Computer Won!';
    }
  }
}


function playGame() {
	let userChoice = getUserChoice('bomb');
	let computerChoice = getComputerChoice();
	console.log(`userChoice:${userChoice} \ncomputerChoice:${computerChoice}\n`);
	if (userChoice === 'bomb'){
		console.log('User Won!');	
	}
	else{
		console.log(determineWinner(userChoice,computerChoice));
	}
}

playGame();