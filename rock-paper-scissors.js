function computerPlay () {
	const RPS = ["rock", "paper", "scissors"];
	return RPS[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
	let win = `You win ! ${playerSelection} beats ${computerSelection}`;
	let lose = `You lose ! ${computerSelection} beats ${playerSelection}`;
	const results = document.querySelector("#results");

	if (playerSelection === computerSelection) {
		results.textContent = "Draw !";
	}
	else if ((playerSelection === "rock" && computerSelection === "paper") || 
			(playerSelection === "paper" && computerSelection === "scissors") ||
			(playerSelection === "scissors" && computerSelection === "rock")) {
		results.textContent = lose;
	}
	else if ((playerSelection === "rock" && computerSelection === "scissors") || 
			(playerSelection === "paper" && computerSelection === "rock") || 
			(playerSelection === "scissors" && computerSelection === "paper")) {
		results.textContent = win;
	}
}

function game() {
	let rounds = 5;
	let playerScore = 0;
	let computerScore = 0;
	const buttons = document.querySelectorAll("button");
	const round = document.querySelector("#round");
	const score = document.querySelector("#score");
	buttons.forEach(button => button.addEventListener("click", () => {
				playRound(button.id,computerPlay()
				)}));

	while (rounds >= 1) {
		console.log(play);

		if (score.includes("win")) {
			playerScore += 1;
			rounds -= 1;
			round.textContent = rounds;
		}
		else if (score.includes("lose")) { 
			computerScore += 1;
			rounds -= 1;
			round.textContent = rounds;
		}
		else { 
			console.log(score);
			round.textContent = rounds;
		}

	}
	// console.log(`Your score is ${playerScore}, the computer scored ${computerScore}`);
	// if (playerScore > computerScore) {
	// 	console.log("You win !");
	// }
	// else { console.log("You lose !") }

}

game();