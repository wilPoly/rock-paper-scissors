function random () {
	return Math.floor(Math.random() * 3)
}

function computerPlay () {
	// returns randomly "Rock", "Paper" or "Scissors"
	switch (random()) {

		case 0:
			return "rock";
		
		case 1:
			return "paper";
		
		case 2:
			return "scissors";
		
		default:
			return "Random";
	}
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	let win = `You win ! ${playerSelection} beats ${computerSelection}`;
	let lose = `You lose ! ${computerSelection} beats ${playerSelection}`;

	if (playerSelection === computerSelection) {
		return "Draw !"
	}
	else if (playerSelection === "rock" && computerSelection === "paper") {
		return lose;
	}
	else if (playerSelection === "rock" && computerSelection === "scissors") {
		return win;
	}
	else if (playerSelection === "paper" && computerSelection === "rock") {
		return win;
	}
	else if (playerSelection === "paper" && computerSelection === "scissors") {
		return lose;
	}
	else if (playerSelection === "scissors" && computerSelection === "rock") {
		return lose;
	}
	else if (playerSelection === "scissors" && computerSelection === "paper") {
		return win;
	}
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(`You played ${playerSelection}`);
console.log(`Computer played ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));