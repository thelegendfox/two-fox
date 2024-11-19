for (let i = 0; i < 4; i++) {
	let gridNum = i + 1;
	let className = "grid-token-" + gridNum;
	for (let i = 0; i < 16; i++) {
		let container = document.querySelector("#grid");
		let element = document.createElement("div");
		container.appendChild(element);
		element.classList.add("grid-token" + className);
	}
}
