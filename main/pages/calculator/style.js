function createPage() {
	for (let i = 0; i < 4; i++) {
		let gridNum = i + 1;
		let className = "grid-token-" + gridNum;

		for (let j = 0; j < 4; j++) {
			//let container = document.querySelector("#grid");
			let elementBox = document.querySelector("#box-" + gridNum);
			let element = document.createElement("div");
			elementBox.appendChild(element);
			element.classList.add("grid-token");
			element.classList.add(className);
		}
	}

	for (let i = 0; i < 2; i++) {
		let elementBox = document.querySelector("#box-5");
		let element = document.createElement("div");
		elementBox.appendChild(element);
		//element.classList.add("grid-token");
		element.classList.add("grid-token-manual");
		element.classList.add("zero");
		if (i == 1) {
			element.classList.add("zero-right");
		} else {
			element.classList.add("zero-left");
		}
	} //done in a for loop so that "element" remains independent

	for (let i = 0; i < 2; i++) {
		let elementBox = document.querySelector("#box-5");
		let element = document.createElement("div");
		elementBox.appendChild(element);
		element.classList.add("grid-token");
		element.classList.add("grid-token-manual");
	}
}
createPage();
