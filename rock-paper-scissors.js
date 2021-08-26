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
	const score = document.querySelector("#score");
	const results = document.querySelector("#results");

	console.log(playerScore, computerScore);

	buttons.forEach(button => button.addEventListener("click", () => {
		results.textContent = playRound(button.id,computerPlay());
		if (results.textContent.includes("win")) {
			playerScore += 1;
			score.textContent = `Your score is ${playerScore}, the computer scored ${computerScore}`;
			console.log(playerScore, computerScore);
		}
		else if (results.textContent.includes("lose")) { 
			computerScore += 1;
			score.textContent = `Your score is ${playerScore}, the computer scored ${computerScore}`;
			console.log(playerScore, computerScore);
		}
		
		if (computerScore === 5 || playerScore === 5) {
			score.textContent = `Your score is ${playerScore}, the computer scored ${computerScore}`;
			console.log(playerScore, computerScore);
			if (playerScore > computerScore) {
				score.textContent += " You win !";
			}
			else { score.textContent += " You lose !" }
			endGame();
		}
	}));
}

function disableButtons() {
	buttons.forEach(button => {
		button.setAttribute("disabled", "on");
		button.setAttribute("autocomplete", "off");
	});
}

function enableButtons() {
	buttons.forEach(button => {
		button.removeAttribute("disabled");
	});
}

function endGame() {
	const replayButton = document.querySelector("#replay");
	const textInterface = document.querySelectorAll(".text > div");
	
	disableButtons();
	replayButton.removeAttribute("style");

	replayButton.addEventListener("click", () => {
		playerScore = 0;
		computerScore = 0;
		textInterface.forEach(element => element.textContent = "");
		replayButton.style.display = "none";
		enableButtons();
	});
}

const buttons = document.querySelectorAll(".buttons > button");
let playerScore = 0;
let computerScore = 0;
game();