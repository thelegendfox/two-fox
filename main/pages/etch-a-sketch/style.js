const sketchContainer = document.querySelector("#container");
const alphaContainer = document.querySelector("#mainContainer");

/**/
//Creating grid

const totalBlocks = 256; //this must be interactable later
function createSketchPage() {
	for (let i = 0; i < totalBlocks; i++) {
		const element = document.createElement("div");
		element.classList.add("block");
		element.textContent = "TEST";
		sketchContainer.appendChild(element);
	}
	adjustBlockSize(totalBlocks);
}
const blockCount = sketchContainer.children.length;
sketchContainer.style.setProperty("--block-count", blockCount);
/**/

createSketchPage();
