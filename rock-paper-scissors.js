function random () {
	return Math.floor(Math.random() * 3)
}

function computerPlay () {
	// returns randomly "Rock", "Paper" or "Scissors"
	switch (random()) {

		case 0:
			console.log("Rock");
			break;
		
		case 1:
			console.log("Paper");
			break;
		
		case 2:
			console.log("Scissors");
			break;
		
		default:
			console.log("Random");
	}
}

computerPlay();