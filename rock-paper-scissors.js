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

function game(playerScore = 0, computerScore = 0, results = "") {
	const buttons = document.querySelectorAll(".buttons > button");
	const score = document.querySelector("#score");
	results = document.querySelector("#results");
	// playerScore = 0;
	// computerScore = 0;
	// results.textContent = "";

	buttons.forEach(button => button.addEventListener("click", () => {
		results = playRound(button.id,computerPlay());
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
	interface.forEach(element => element.style.display = "none");

	const replayButton = document.querySelector("#replay");
	replayButton.removeAttribute("style");
	// on click, make interface visible AND reset score =>  relaunch game() OR startGame() ?
	replayButton.addEventListener("click", () => {
		interface.forEach(element => element.removeAttribute("style"));
		replayButton.style.display = "none";
		game(0, 0, ""); // trying to reset game status
	});
}

game();