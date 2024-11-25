let dV = ""; //Display Value

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
			//TO BE DETERMINED
			//alert("HelloWorld " + listenerItem.textContent);
			//displayText += listenerItem.textContent;
			dV = listenerItem.textContent; //Display Value
			valueDeterminer();
			return listenerItem.textContent;
		});
	}
	for (let i = 1; i < 5; i++) {
		let idVal = "#manEl" + i;
		let listenerItem = document.querySelector(idVal);
		listenerItem.addEventListener("click", () => {
			//TO BE DETERMINED
			//alert("HelloWorld " + listenerItem.textContent);
			//displayText += listenerItem.textContent;
			dV = listenerItem.textContent; //Display Value
			valueDeterminer();
			return listenerItem.textContent;
		});
	}
}

/* To Be Done: Make operators work. Make it switch nums automatically and make the operators dynamic for the = sign.*/

function valueDeterminer() {
	const display = document.querySelector("#display");
	let determineNum = 1;
	let numbers1 = "";
	let numbers2 = "";
	operator = "";
	//Yes this is obscenely long. Sorry.
	if (dV == "AC") {
		display.textContent = "";
	} else if (dV == "+/-") {
		//Execute the operation
		alert(dV);
	} else if (dV == "%") {
		//
		alert(dV);
	} else if (dV == "÷") {
		//
		alert(dV);
	} else if (dV == "*") {
		//
		alert(dV);
	} else if (dV == "-") {
		//
		alert(dV);
	} else if (dV == "+") {
		operator = "+";
		display.textContent = "";
		determineNum = 2;
		alert(dV);
	} else if (dV == "=") {
		alert(dV);
	} else if (dV == ".") {
		//
		alert(dV);
	} else if ((determineNum = 1)) {
		numbers1 += dV;
		display.textContent += dV;
	} else {
		numbers2 += dV;
		display.textContent += dV;
	}
}
function executePage() {
	createPage();
	buttonDetector();
}
executePage();
