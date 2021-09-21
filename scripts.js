let humanScore = 0;
let computerScore = 0;
let draws = 0;
const results = document.querySelector('#results');
const buttons = document.querySelectorAll('button');


function createLog(text) {
	const p = document.createElement('p');
	p.textContent = text;
	return p;
}
	

function computerPlay() {
	options = ['Rock', 'Paper', 'Scissors']
	return options[Math.floor(Math.random() * options.length)]};

buttons.forEach(button => {
	button.addEventListener('click', () => {
		playGame(button.id);
})});

function playRound(playerChoice) {
	let log = "";
	if (playerChoice === "rock") {
		if (computerTurn === "Scissors") {
			winner = "You";
			humanScore++;
			log = "You win! Your Rock beats their Scissors!";
		} else if (computerTurn === "Paper") {
			winner = "Computer";
			computerScore++;
			log = "You lose! Their Paper beats your Rock!";
		} else if (computerTurn === "Rock") {
			winner = "Draw";
			draws++;
			log = "Its a draw! You both picked Rock!";
		}
		}
	else if (playerChoice === "paper") {
		if (computerTurn === "Rock") {
			winner = "You";
			humanScore++;
			log = ("You win! Your Paper beats their Rock!");
		} else if (computerTurn === "Scissors") {
			winner = "Computer";
			computerScore++;
			log = ("You lose! Their Scissors beats your Paper!");
		} else if (computerTurn === "Paper") {
			winner = "Draw";
			draws++;
			log = ("Its a draw! You both picked Paper!");
		}
		}
	else if (playerChoice === "scissors") {
		if (computerTurn === "Paper") {
			winner = "You";
			humanScore++;
			log = ("You win! Your Scissors beats their Paper!");
		} else if (computerTurn === "Rock") {
			winner = "Computer";
			computerScore++;
			log = ("You lose! Their Rock beats your Scissors!");
		} else if (computerTurn === "Scissors") {
			winner = "Draw";
			draws++;
			log = ("Its a draw! You both picked Scissors!");
		}
	}
	return log;
	};

function playGame(input) {
	computerTurn = computerPlay();
	playerTurnResult = playRound(input);
	logData = createLog(playerTurnResult)
	results.appendChild(logData);
	if (humanScore === 5 || computerScore === 5) {
		finalScore = (`Final Score is you: ${humanScore} to computer: ${computerScore} with ${draws} draws`);
		logData = createLog(finalScore)
		results.appendChild(logData);
	}
}