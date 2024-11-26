let dV = ""; //Display Value
let numDeterminer = 1;
let numbers1 = "";
let numbers2 = "";
let operator = "";

/* What Needs To Be Done */
/*
	-When an operator button is hit, make it:
		(COMPLETE) 1. Save the numbers in the calculator (if none, ignore)
		2. Clear the display and switch the numbers to another save state
		(COMPLETE) 3. Perform the operation when the = is hit.
		4. Perform the operation when another operator is hit, and switch back to the other num.
	-Make display functional.
	(COMPELTE) -Maybe save the operator in a variable and then use if/else if strings to use the operation when = is hit?
	(COMPLETE )-Get just the = working first.
	-Make it open bad apple if the user tries to divide by 0. This is in the future but it's funny.
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
}

function buttonDetector() {
	//Returns values of buttons when pressed
	for (let i = 1; i < 17; i++) {
		let idVal = "#el" + i;
		let listenerItem = document.querySelector(idVal);
		listenerItem.addEventListener("click", () => {
			dV = listenerItem.textContent; //Display Value
			valueDeterminer();
			return listenerItem.textContent;
		});
	}
	for (let i = 1; i < 5; i++) {
		let idVal = "#manEl" + i;
		let listenerItem = document.querySelector(idVal);
		listenerItem.addEventListener("click", () => {
			dV = listenerItem.textContent; //Display Value
			valueDeterminer();
			return listenerItem.textContent;
		});
	}
}

function valueDeterminer() {
	const display = document.querySelector("#display");
	//Yes this is obscenely long. Sorry.
	if (dV == "AC") {
		display.textContent = "";
		numbers1 = "";
		numbers2 = "";
		operator = "";
		numDeterminer = 1;
		dV = "";
	} else if (dV == "+/-") {
		alert(dV);
		numDeterminer = 2;
		operator = dV;
	} else if (dV == "%") {
		alert(dV);
		numDeterminer = 2;
		operator = dV;
	} else if (dV == "÷") {
		alert(dV);
		numDeterminer = 2;
		operator = dV;
	} else if (dV == "*") {
		alert(dV);
		numDeterminer = 2;
		operator = dV;
	} else if (dV == "-") {
		alert(dV);
		numDeterminer = 2;
		operator = dV;
	} else if (dV == "+") {
		alert(dV);
		numDeterminer = 2;
		operator = dV;
	} else if (dV == "=") {
		alert(dV);
		numDeterminer = 2;
		calculate();
	} else if (dV == ".") {
		alert(dV);
		numDeterminer = 2;
		operator = dV;
	} else if (numDeterminer == 1) {
		numbers1 += dV;
		display.textContent += dV;
	} else if (numDeterminer == 2) {
		numbers2 += dV;
		display.textContent += dV;
	} else {
		//
	}
	console.log(
		numbers1 +
			" num2 " +
			numbers2 +
			" numD " +
			numDeterminer +
			" operator " +
			operator
	);
}

function calculate() {
	numbers1 = parseInt(numbers1);
	numbers2 = parseInt(numbers2);
	if (numbers1 == undefined || numbers2 == undefined) {
		console.log("Failed due to num being undefined!");
		return undefined;
	}
	if (operator == "÷") {
		console.log(numbers1 / numbers2);
	} else if (operator == "*") {
		console.log(numbers1 * numbers2);
	} else if (operator == "-") {
		console.log(numbers1 - numbers2);
	} else if (operator == "+") {
		console.log(numbers1 + numbers2);
	}
}

function executePage() {
	createPage();
	buttonDetector();
}
executePage();
