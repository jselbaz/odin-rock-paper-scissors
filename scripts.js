function humanPlay () {
	while (1) {
		var humanChoice = prompt("Rock, Paper, or Scissors?");
		if (humanChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "paper" || humanChoice.toLowerCase() === "scissors") {
			break;
		}
	}
	switch (humanChoice.toLowerCase()) {
		case "rock":
			humanChoice = "Rock";
			break;
		case "paper":
			humanChoice = "Paper";
			break;
		case "scissors":
			humanChoice = "Scissors";
			break;
	}
	return humanChoice
}

function computerPlay () {
	let computerNum = Math.floor(Math.random() * 3) + 1;
	switch (computerNum) {
		case 1:
			computerChoice = "Rock";
			break;
		case 2:
			computerChoice = "Paper";
			break;
		case 3:
			computerChoice = "Scissors";
			break;
	}
	return computerChoice
}

function playRound() {
	let humanTurn = humanPlay();
	let computerTurn = computerPlay();
	switch(humanTurn) {
		case "Rock":
			if (computerTurn === "Scissors") {
				var winner = "You";
				console.log("You win! Your Rock beats their Scissors!");
			} else if (computerTurn === "Paper") {
				var winner = "Computer";
				console.log("You lose! Their Paper beats your Rock!");
			} else if (computerTurn === "Rock") {
				var winner = "Draw";
				console.log("Its a draw! You both picked Rock!");
			}
			break;
		case "Paper":
			if (computerTurn === "Rock") {
				var winner = "You";
				console.log("You win! Your Paper beats their Rock!");
			} else if (computerTurn === "Scissors") {
				var winner = "Computer";
				console.log("You lose! Their Scissors beats your Paper!");
			} else if (computerTurn === "Paper") {
				var winner = "Draw";
				console.log("Its a draw! You both picked Paper!");
			}
			break;
		case "Scissors":
			if (computerTurn === "Paper") {
				var winner = "You";
				console.log("You win! Your Scissors beats their Paper!");
			} else if (computerTurn === "Rock") {
				var winner = "Computer";
				console.log("You lose! Their Rock beats your Scissors!");
			} else if (computerTurn === "Paper") {
				var winner = "Draw";
				console.log("Its a draw! You both picked Scissors!");
			}
			break;
	}
	return winner
}

function game() {
	humanScore = 0;
	computerScore = 0;
	for (let i = 0; i<5; i++) {
		winner = playRound();
		if (winner === "You") {
			humanScore += 1;
		} else if (winner === "Computer") {
			computerScore += 1;
		}
	}
	console.log(`Final Score is you: ${humanScore} to computer: ${computerScore} with ${5 - humanScore - computerScore} draws`);
	if (humanScore > computerScore) {
		console.log("You win the game!");
	} else if (humanScore < computerScore) {
		console.log("Computer wins the game!")
	} else {
		console.log("It's a tie!")
	}
}
