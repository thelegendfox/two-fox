let dV = ""; //Display Value
let numDeterminer = 1;
let lastPressedChar = "";
let numbers1 = "";
let numbers2 = "";
let operator = "";
let sum = 0;
let sumParsed = 0;
let sumParsedStr = "";
let hasDecimal = 0;

/* What Needs To Be Done */
/*
	-When an operator button is hit, make it:
		(COMPLETE) 1. Save the numbers in the calculator (if none, ignore)
		(COMPLETE) 2. Clear the display and switch the numbers to another save state
		(COMPLETE) 3. Perform the operation when the = is hit.
		(COMPLETE) 4. Perform the operation when another operator is hit, and switch back to the other num.
	(COMPLETE) -Make display functional.
	(COMPELTE) -Maybe save the operator in a variable and then use if/else if strings to use the operation when = is hit?
	(COMPLETE) -Get just the = working first.
	(COMPLETE) -Make it so that the sum is actually saved inside the num variables (e.g. if sum is 12 and numDeterminer is 2, save 12 in numbers1)
	(COMPLETE) -Find a way to have lastPressedChar let you define operators as operators
	(COMPLETE) -Delete display text if the lastPressedChar is an operator and the next is a number.
	(COMPLETE) -Make it open bad apple if the user tries to divide by 0. This is in the future but it's funny.
	(COMPLETE) -Let you change numbers to negative.
	(COMPLETE) -Let you use decimals.
	(ABORTED) -Add percentage support.
	-Add keyboard support (seems very complex so i might not do it)
	-Optimize code(!!!!!)
*/

function createPage() {
	let num = 0;
	//Adds the grid tokens (except for the ones below)
	for (let i = 0; i < 4; i++) {
		let gridNum = i + 1;
		let className = "grid-token-" + gridNum;
		for (let j = 0; j < 4; j++) {
			num++;
			let elementBox = document.querySelector("#box-" + gridNum);
			let element = document.createElement("div");
			elementBox.appendChild(element);
			element.classList.add("grid-token");
			element.classList.add(className);
			element.setAttribute("id", "el" + num);
		}
	}
	//Adds the 0 button (technically, buttons)
	for (let i = 0; i < 2; i++) {
		let elementBox = document.querySelector("#box-5");
		let element = document.createElement("div");
		elementBox.appendChild(element);
		//element.classList.add("grid-token");
		element.classList.add("grid-token-manual");
		element.classList.add("zero");
		element.setAttribute("id", "manEl" + 3);
		if (i == 1) {
			element.setAttribute("id", "manEl" + 3);
			element.classList.add("zero-right");
			element.textContent = "0";
		} else {
			element.setAttribute("id", "manEl" + 4);
			element.classList.add("zero-left");
			element.textContent = "0";
		}
	}
	//Adds the 2 other manual grid tokens (. and =) and assigns text
	for (let i = 1; i < 3; i++) {
		let elementBox = document.querySelector("#box-5");
		let element = document.createElement("div");
		elementBox.appendChild(element);
		element.classList.add("grid-token");
		element.classList.add("grid-token-manual");
		element.setAttribute("id", "manEl" + i);
	}
	//Adds the numbers to the number tokens (except for 0, added inside its loop),
	//and adds the "number" class so they're colored.
	for (let i = 1; i < 17; i++) {
		if (i > 4 && i < 8) {
			let element = document.querySelector("#el" + i);
			element.textContent = i - 4;
			element.classList.add("number");
		} else if (i > 8 && i < 12) {
			let element = document.querySelector("#el" + i);
			element.textContent = i - 5;
			element.classList.add("number");
		} else if (i > 12 && i < 16) {
			let element = document.querySelector("#el" + i);
			element.textContent = i - 6;
			element.classList.add("number");
		} else {
			let el1 = document.querySelector("#manEl1");
			let el2 = document.querySelector("#manEl2");
			el1.textContent = ".";
			el2.textContent = "=";
		}
	}
	//Adds symbols and stuff to the button tokens
	{
		document.querySelector("#el1").textContent = "AC";
		document.querySelector("#el2").textContent = "+/-";
		document.querySelector("#el3").textContent = "%";
		document.querySelector("#el4").textContent = "÷";
		document.querySelector("#el8").textContent = "*";
		document.querySelector("#el12").textContent = "-";
		document.querySelector("#el16").textContent = "+";
	}
	display.textContent.replace(/[\n\t\r ]+/g, " ").trim();
}

function buttonDetector() {
	//Returns values of buttons when pressed
	for (let i = 1; i < 17; i++) {
		let idVal = "#el" + i;
		let listenerItem = document.querySelector(idVal);
		listenerItem.addEventListener("click", () => {
			lastPressedChar = dV;
			dV = listenerItem.textContent; //Display Value
			valueDeterminer();
			return listenerItem.textContent;
		});
	}
	for (let i = 1; i < 5; i++) {
		let idVal = "#manEl" + i;
		let listenerItem = document.querySelector(idVal);
		listenerItem.addEventListener("click", () => {
			lastPressedChar = dV;
			dV = listenerItem.textContent; //Display Value
			valueDeterminer();
			return listenerItem.textContent;
		});
	}
	display.textContent.replace(/[\n\t\r ]+/g, " ").trim();
}

function valueDeterminer() {
	const display = document.querySelector("#display");
	//Yes this is obscenely long. Sorry.
	display.textContent.replace(/[\n\t\r ]+/g, " ").trim();
	if (
		lastPressedChar == "+" ||
		lastPressedChar == "-" ||
		lastPressedChar == "/" ||
		lastPressedChar == "*" ||
		lastPressedChar == "=" ||
		lastPressedChar == "÷"
	) {
		display.textContent = "";
		hasDecimal = 0;
		console.log("reset text of display");
	}
	if (dV == "AC") {
		display.textContent = "";
		hasDecimal = 0;
		numbers1 = "";
		numbers2 = "";
		operator = "";
		lastPressedChar = "";
		numDeterminer = 1;
		sum = 0;
		sumParsed = 0;
		dV = "";
	} else if (dV == "+/-") {
		if (numbers1.charAt(10) == "-" || numbers1.charAt(10) == "-") {
			//
		} else {
			if (numDeterminer == 1) {
				numbers1 = "-" + numbers1;
				display.textContent = "-" + display.textContent;
			} else if (numDeterminer == 2) {
				numbers1 = "-" + numbers2;
				display.textContent = "-" + display.textContent;
			}
		}
	} else if (dV == "%") {
		console.log(
			"This sets everything to 0 in all my calculators so... i'm not gonna touch that"
		);
	} else if (dV == "÷") {
		calculate();
		operator = dV;
	} else if (dV == "*") {
		calculate();
		operator = dV;
	} else if (dV == "-") {
		calculate();
		operator = dV;
	} else if (dV == "+") {
		calculate();
		operator = dV;
	} else if (dV == "=") {
		calculate();
	} else if (dV == ".") {
		//If the text doesn't have a decimal...
		if (hasDecimal == 0) {
			hasDecimal = 1;
			if (numDeterminer == 1) {
				//...make it say it has a decimal, and then add it.
				numbers1 += dV; //Can't add decimal if it already has it.
				display.textContent += dV;
			} else if (numDeterminer == 2) {
				numbers2 += dV;
				display.textContent += dV;
			}
		}
	} else if (numDeterminer == 1) {
		if (display.textContent.length <= 20) {
			numbers1 += dV;
			display.textContent += dV;
		} else {
			console.log("too many chars");
			return;
		}
	} else if (numDeterminer == 2) {
		if (display.textContent.length <= 11) {
			numbers2 += dV;
			display.textContent += dV;
		} else {
			console.log("too many chars");
			return;
		}
	} else {
		//
	}
	console.log(
		numbers1 +
			" numbers2 " +
			numbers2 +
			"numbers2" +
			" numD " +
			numDeterminer +
			" operator " +
			operator
	);
	display.textContent.replace(/[\n\t\r ]+/g, " ").trim();
}

function calculate() {
	display.textContent.replace(/[\n\t\r ]+/g, " ").trim();
	if (numbers1 == "") {
		numbers1 = 0;
		console.log("Replaced numbers1 with " + numbers1);
	} else if (numbers2 == "") {
		numbers2 = 0;
		console.log("Replaced numbers2 with " + numbers2);
	} else {
		numbers1 = parseFloat(numbers1);
		numbers2 = parseFloat(numbers2);
	}

	switchNumDet();
	console.log("switched numbers function");
	if (operator == "÷") {
		console.log(numbers1 / numbers2 + " CALCULATED");
		sum = numbers1 / numbers2;
		addSumToDisplay();
		if (sum == Infinity) {
			window.location.href = "https://www.youtube.com/watch?v=9lNZ_Rnr7Jc";
			//plays if you divide by 0.
			//Well, actually it plays if any division-thing equals infinity, but that still works for anything divided by 0.
			//This is Bad Apple, by the way.
		} else display.textContent = numbers1 / numbers2;
	} else if (operator == "*") {
		console.log(numbers1 * numbers2 + " CALCULATED");
		sum = numbers1 * numbers2;
		addSumToDisplay();
	} else if (operator == "-") {
		console.log(numbers1 - numbers2 + " CALCULATED");
		sum = numbers1 - numbers2;
		addSumToDisplay();
	} else if (operator == "+") {
		console.log(numbers1 + numbers2 + " CALCULATED");
		sum = numbers1 + numbers2;
		addSumToDisplay();
	}

	console.log(
		parseFloat(sum) + " sum parsed in calculate " + sum + " normal Sum"
	);
	sumParsed = parseFloat(sum);
	numDeterminer = 2;
	if (sumParsed !== 0) {
		numbers1 = sum;
		numbers2 = "0";
		console.log("Numbers1 should equal the sum now " + sumParsed);
	}
	display.textContent.replace(/[\n\t\r ]+/g, " ").trim();
}

function addSumToDisplay() {
	sumParsed = parseFloat(sum);
	display.textContent = "";
	sumParsedStr = sumParsed.toString();
	for (let i = 0; i < sumParsedStr.length && i < 12; i++) {
		display.textContent += sumParsedStr.charAt(i);
	}
}

function testDisplay() {
	//Legacy testing function made to check if it automatically cuts off the sum being added
	//if there are too many characters.
	let testNum = "123456789123456789";
	for (let i = 0; i < testNum.length && i < 12; i++) {
		console.log(testNum.charAt(i) + " " + i + " ");
		display.textContent += testNum.charAt(i);
	}
}

function switchNumDet() {
	if (numDeterminer == 1) {
		numDeterminer = 2;
	} else if (numDeterminer == 2) {
		numDeterminer = 1;
	}
}

function clearDisplayByOp() {
	//test function will probably be deleted
}

function executePage() {
	createPage();
	buttonDetector();
}
executePage();
