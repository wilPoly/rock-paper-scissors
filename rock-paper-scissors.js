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

function game() {
	let rounds = 5;
	let playerSelection;
	let computerSelection;
	let play;
	let playerScore = 0;
	let computerScore = 0;

	while (rounds >=1) {
		playerSelection = prompt("Rock, paper or scissors ?");
		computerSelection = computerPlay();
		alert(`The computer played ${computerSelection}`);
		play = playRound(playerSelection, computerSelection);

		if (play.includes("win")) {
			playerScore += 1;
			alert(play);
			rounds -= 1;
			console.log(rounds);
		}
		else if (play.includes("lose")) { 
			alert(play);
			computerScore += 1;
			rounds -= 1;
			console.log(rounds);
		}
		else { 
			alert(play);
			console.log(rounds);
		}

	}
	console.log(`Your score is ${playerScore}, the computer scored ${computerScore}`);
	if (playerScore > computerScore) {
		console.log("You win !");
	}
	else { console.log("You lose !") }

}

game();

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(`You played ${playerSelection}`);
// console.log(`Computer played ${computerSelection}`);
// console.log(playRound(playerSelection, computerSelection));;