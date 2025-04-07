/*
    IIFE template
    thanks mdn
    ---
        (function () {
            
        })();

    ---

        (() => {
            
        })();
*/

/*
    todo:
        -get the info working (complete)
        -get win determination working
    

    not in any specific order
*/

const gameInfo = (() => {
	const players = {
		player1Name: undefined,
		player2Name: undefined, // must add character names on game start in that func
	};

	const points = {
		score: (player) => points[player + 1]++,
		values: [0, 0], // undefined so that player1 and player2 go to value1 and value2
	};

	const squares = {
		values: ["", "", "", "", "", "", "", "", ""],
		change: function (num, val) {
			squares.values[num] = val;
			let squaresWithoutVals = 0;

			for (let i = 0; i < 9; i++) {
				if (squares.values[i] == "") {
					squaresWithoutVals++;
				}
			}

			if (squaresWithoutVals == 0) {
				determineWin();
			}
		},
		wipe: function () {
			for (let i = 0; i < 9; i++) {
				values[i] = "";
			}
		},
	};

	return {
		players,
		points,
		squares,
	};
})();

const gameBoard = undefined; // Will eventually integrate with DOM

function determineWin() {
	let winConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < 8; i++) {
		let con = winConditions[i]; // checked current win condition
		if (
			gameInfo.squares.values[con[0]] == "x" &&
			gameInfo.squares.values[con[1]] == "x" &&
			gameInfo.squares.values[con[2]] == "x"
		) {
			console.log("Win");
			return "Win";
		} else if (i == 7) {
			console.log("Loss"); // makes it only say "Loss" once, and will not run if there's a win anywhere due to the break statement
			return "Loss";
		} else {
			continue; // yes i saw the tom scott video i know it's annoying to use this but i dont care
		}
	}

	for (let i = 0; i < 8; i++) {
		let con = winConditions[i];
		if (
			gameInfo.squares.values[con[0]] == "o" &&
			gameInfo.squares.values[con[1]] == "o" &&
			gameInfo.squares.values[con[2]] == "o"
		) {
			console.log("Win");
			break;
		} else if (i == 7) {
			console.log("Loss");
			break;
		} else {
			continue;
		}
	}
	// same thing as above just to check "o" instead of "x"
}

for (let i = 0; i < 8; i++) {
	gameInfo.squares.values[i] = "x";
}
