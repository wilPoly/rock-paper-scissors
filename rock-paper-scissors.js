function computerPlay () {
	const RPS = ["rock", "paper", "scissors"];
	return RPS[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase();
	let win = `You win ! ${playerSelection} beats ${computerSelection}`;
	let lose = `You lose ! ${computerSelection} beats ${playerSelection}`;

	// refactor => group losing and winning conditions
	if (playerSelection === computerSelection) {
		return "Draw !"
	}
	else if ((playerSelection === "rock" && computerSelection === "paper") || 
			(playerSelection === "paper" && computerSelection === "scissors") ||
			(playerSelection === "scissors" && computerSelection === "rock")) {
		return lose;
	}
	else if ((playerSelection === "rock" && computerSelection === "scissors") || 
			(playerSelection === "paper" && computerSelection === "rock") || 
			(playerSelection === "scissors" && computerSelection === "paper")) {
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
	alert(`Your score is ${playerScore}, the computer scored ${computerScore}`);
	if (playerScore > computerScore) {
		alert("You win !");
	}
	else { alert("You lose !") }

}

game();