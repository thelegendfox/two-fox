// New goal: just make it so you have infinite rounds in the HTML game and just count UP. Then add a button that ends the game and shows the final result and who won.

let humanScore = 0;
let computerScore = 0;
let contextResult = "";
let contextComputerChoice = "";
let contextHumanChoice = "";
let gameRunning = 5;
let formLabel = document.getElementById("formLabel");
let roundsRemainingText = document.getElementById("rounds-remaining-text");
let roundsRemaining = 5;
let htmlText1 = document.getElementById("text1");
let htmlText2 = document.getElementById("text2");
let htmlText3 = document.getElementById("text3");
let htmlText4 = document.getElementById("text4");
let htmlText5 = document.getElementById("text5");

function playGameButton() {
	if (gameRunning > 0) {
		playHtmlGame();
	}
}

function newRoundButton() {
	playRound();
	gameRunning--;
}

function getComputerChoice() {
	var randomChoice = Math.floor(Math.random() * (4 - 1) + 1);
	if (randomChoice === 1) {
		console.log("Computer Chooses: Rock! " + randomChoice);
		contextComputerChoice = "Computer Chooses: Rock!";
		return "rock";
	} else if (randomChoice === 2) {
		console.log("Computer Chooses: Paper! " + randomChoice);
		contextComputerChoice = "Computer Chooses: Paper!";
		return "paper";
	} else if (randomChoice === 3) {
		console.log("Computer Chooses: Scissors! " + randomChoice);
		contextComputerChoice = "Computer Chooses: Paper!";
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
				humanChoice.toLowerCase().charAt(0).toUpperCase() +
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
		contextResult = "You win! Rock beats Scissors!";
		humanScore++;
		result = 1;
	} else if (humanChoice == "paper" && computerChoice == "rock") {
		console.log("You win! Paper beats Rock!");
		contextResult = "You win! Paper beats Rock!";
		humanScore++;
		result = 2;
	} else if (humanChoice == "scissors" && computerChoice == "paper") {
		console.log("You win! Scissors beats Paper!");
		contextResult = "You win! Scissors beats Paper!";
		humanScore++;
		result = 3;
	} else if (humanChoice == "rock" && computerChoice == "paper") {
		console.log("You lose! Paper beats Rock!");
		contextResult = "You lose! Paper beats Rock!";
		computerScore++;
		result = 4;
	} else if (humanChoice == "paper" && computerChoice == "scissors") {
		console.log("You lose! Scissors beats Paper!");
		contextResult = "You lose! Scissors beats Paper!";
		computerScore++;
		result = 5;
	} else if (humanChoice == "scissors" && computerChoice == "rock") {
		console.log("You lose! Rock beats Scissors!");
		contextResult = "You lose! Rock beats Scissors!";
		computerScore++;
		result = 6;
	} else if (humanChoice == computerChoice) {
		console.log(
			"It's a draw! " + humanChoice + "is the same as" + computerChoice + "!"
		);
		contextResult =
			"It's a draw! " + humanChoice + "is the same as" + computerChoice + "!";
		result = 7;
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
	}
}

function playHtmlGame() {
	//text content: The game is affoot, all that stuff above, connect it to PlayRound and the round playing button

	playRound();
	roundsRemaining--;
	roundsRemainingText.textContent = "Rounds remaining: " + roundsRemaining;
}
