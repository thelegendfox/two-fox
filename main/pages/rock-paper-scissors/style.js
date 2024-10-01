let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
	var randomChoice = Math.floor(Math.random() * (4 - 1) + 1);
	if (randomChoice === 1) {
		console.log("Computer Chooses: Rock! " + randomChoice);
		return "rock";
	} else if (randomChoice === 2) {
		console.log("Computer Chooses: Paper! " + randomChoice);
		return "paper";
	} else if (randomChoice === 3) {
		console.log("Computer Chooses: Scissors! " + randomChoice);
		return "scissors";
	}
}

function getHumanChoice() {
	let humanPrompt = prompt("Hello!", "Enter Rock, Paper, or Scissors");
	let humanChoice = humanPrompt.toLowerCase();
	if (
		humanChoice !== "rock" &&
		humanChoice !== "paper" &&
		humanChoice !== "scissors"
	) {
		humanChoice = undefined;
		humanPrompt = prompt(
			"Incorrect!",
			"Incorrect. Enter Rock, Paper, or Scissors."
		);
		getHumanChoice();
	} else {
		console.log(
			"Human Chooses: " +
				humanChoice.charAt(0).toUpperCase() +
				humanChoice.slice(1) +
				"!"
		);
		return humanChoice;
	}
}

function humanVictory() {
	humanScore++;
}
function computerVictory() {
	computerScore++;
}

function playRound() {
	let humanChoice = getHumanChoice();
	let computerChoice = getComputerChoice();
	if (humanChoice == "rock" && computerChoice == "scissors") {
		console.log("You win! Rock beats Scissors!");
		return humanVictory();
	} else if (humanChoice == "paper" && computerChoice == "rock") {
		console.log("You win! Paper beats Rock!");
		return humanVictory();
	} else if (humanChoice == "scissors" && computerChoice == "paper") {
		console.log("You win! Scissors beats Paper!");
		return humanVictory();
	} else if (humanChoice == "rock" && computerChoice == "paper") {
		console.log("You lose! Paper beats Rock!");
		return computerVictory();
	} else if (humanChoice == "paper" && computerChoice == "scissors") {
		console.log("You lose! Scissors beats Paper!");
		return computerVictory();
	} else if (humanChoice == "scissors" && computerChoice == "rock") {
		console.log("You lose! Rock beats Scissors!");
		return computerVictory();
	} else if (humanChoice == computerChoice) {
		"It's a draw! " + humanChoice + "is the same as" + computerChoice + "!";
		return 0;
	}
}

function determineScore() {
	console.log("Your score: " + humanScore);
	console.log("Computer score: " + computerScore);
}

//make these buttons
function playGame() {
	console.log("The game is afoot!");
	playRound();
	determineScore();
	console.log("Rounds remaining: 4");

	playRound();
	determineScore();
	console.log("Rounds remaining: 3");

	playRound();
	determineScore();
	console.log("Rounds remaining: 2");

	playRound();
	determineScore();
	console.log("Rounds remaining: 1");

	playRound();
	determineScore();
	if (computerScore > humanScore) {
		console.log("You lose! Want to play again?");
	} else if (humanScore > computerScore) {
		console.log("You win! Want to play again?");
	} else if (humanScore == computerScore) {
		("It's a draw! I don't know if that's unlucky or lucky. Want to play again?");
	} else if (humanScore > 5) {
		console.log("You lose! We don't allow cheaters here.");
	}
}
