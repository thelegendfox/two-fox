let blocksPerSide = 16; //this must be interactable later

const sketchContainer = document.querySelector("#container");
const alphaContainer = document.querySelector("#mainContainer");
const resetButton = document.querySelector("#resetButton");

resetButton.addEventListener("click", () => {
	resetButtonOp();
});

function resetButtonOp() {
	let humanPrompt = parseInt(
		prompt("How many blocks would you like per side? 1-100!")
	);
	if (humanPrompt > 0 && humanPrompt < 101) {
		blocksPerSide = humanPrompt;
		sketchContainer.innerHTML = "Generating Grid...";
		setTimeout(createSketchPage, 1000);
	} else resetButtonOp();
}

/**/
//Creating grid

function createSketchPage() {
	sketchContainer.innerHTML = "";
	//creating container elements
	for (let i = 0; i < blocksPerSide; i++) {
		const element = document.createElement("div");
		/* adds number to class to designate the proper number of containers */
		let itemClass = "block-container-";
		itemClass += i + 1;
		/* cease */
		element.classList.add(itemClass);
		element.classList.add("block-container");
		sketchContainer.appendChild(element);
	}
	// creates blocks
	for (let i = 0; i < blocksPerSide; i++) {
		// defines what container the blocks will use
		let containerNumber = ".block-container-";
		containerNumber += i + 1;
		// actually makes the blocks
		for (let j = 0; j < blocksPerSide; j++) {
			//selects the correct container for the blocks
			const container = document.querySelector(containerNumber);
			const element = document.createElement("div");
			element.classList.add("block");
			//text is actually necessary for some reason? it's not a bug it's a feature:tm:
			element.textContent = "TEST";
			//selects blocks on right
			if (containerNumber == ".block-container-" + blocksPerSide) {
				element.classList.add("block-right");
			}
			//selects blocks on bottom
			if (j >= (blocksPerSide * (blocksPerSide - 1)) / blocksPerSide) {
				element.classList.add("block-bottom");
			}
			container.appendChild(element);
			//determines the font size (makes blocks always roughly equal in size)
			document.documentElement.style.setProperty(
				"--dynamic-font-size",
				`${(blocksPerSide * 16) / (blocksPerSide * (blocksPerSide / 16))}px`
			);
		}
	}
	const blocks = document.querySelectorAll(".block");

	blocks.forEach((block) => {
		block.addEventListener("mouseover", () => {
			block.classList.add("block-hover");
		});
	});
}
/**/

createSketchPage();
