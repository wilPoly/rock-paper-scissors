function computerPlay () {
	const RPS = ["rock", "paper", "scissors"];
	return RPS[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
	let win = `You win ! ${playerSelection} beats ${computerSelection}`;
	let lose = `You lose ! ${computerSelection} beats ${playerSelection}`;

	if (playerSelection === computerSelection) {
		// results.textContent = "Draw !";
		return "Draw !";
	}
	else if ((playerSelection === "rock" && computerSelection === "paper") || 
			(playerSelection === "paper" && computerSelection === "scissors") ||
			(playerSelection === "scissors" && computerSelection === "rock")) {
		// results.textContent = lose;
		return lose;
	}
	else if ((playerSelection === "rock" && computerSelection === "scissors") || 
			(playerSelection === "paper" && computerSelection === "rock") || 
			(playerSelection === "scissors" && computerSelection === "paper")) {
		// results.textContent = win;
		return win;
	}
}

function game() {
	const buttons = document.querySelectorAll("button");
	const score = document.querySelector("#score");
	const results = document.querySelector("#results");
	let playerScore = 0;
	let computerScore = 0;

	buttons.forEach(button => button.addEventListener("click", () => {
		results.textContent = playRound(button.id,computerPlay());
		if (results.textContent.includes("win")) {
			playerScore += 1;
			score.textContent = `Your score is ${playerScore}, the computer scored ${computerScore}`;
		}
		else if (results.textContent.includes("lose")) { 
			computerScore += 1;
			score.textContent = `Your score is ${playerScore}, the computer scored ${computerScore}`;
		}
		
		if (computerScore === 5 || playerScore === 5) {
			score.textContent = `Your score is ${playerScore}, the computer scored ${computerScore}`;
			if (playerScore > computerScore) {
				score.textContent += " You win !";
			}
			else { score.textContent += " You lose !" }
			endGame();
		}
	}));

}

function endGame() {
	const interface = document.querySelectorAll("div");
	// on end game, make interface invisible
	interface.forEach(element => element.style.display = "none");
	// add a button to start game again
	const replayButton = document.createElement("button");
	replayButton.setAttribute("name", "replay");
	replayButton.textContent = "Play again?";
	const body = document.querySelector("body");
	body.appendChild(replayButton);
	// on click, make interface visible AND reset score =>  relaunch game() OR startGame() ?
	replayButton.addEventListener("click", () => {
		game();
		interface.forEach(element => element.style.display = "");
	});
}

game();