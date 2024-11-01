/**/
//Creating grid
const sketchContainer1 = document.querySelector("#container1");
const sketchContainer2 = document.querySelector("#container2");
const sketchContainer3 = document.querySelector("#container3");
const sketchContainer4 = document.querySelector("#container4");
function createSketchPage() {
	// for (let i = 0; i < 4; i++) {
	// 	const element = document.createElement("div");
	// 	element.classList.add("block-far-left");
	// 	element.textContent = "TEST";
	// 	sketchContainer3.appendChild(element);
	// }
	for (let i = 0; i < 16; i++) {
		const element = document.createElement("div");
		element.classList.add("block-left");
		element.textContent = "TEST";
		sketchContainer3.appendChild(element);
	}
	// for (let i = 0; i < 8; i++) {
	// 	const element = document.createElement("div");
	// 	element.classList.add("block-right");
	// 	element.textContent = "TEST";
	// 	sketchContainer3.appendChild(element);
	// }
	// for (let i = 0; i < 4; i++) {
	// 	const element = document.createElement("div");
	// 	element.classList.add("block-far-right");
	// 	element.textContent = "TEST";
	// 	sketchContainer3.appendChild(element);
	// }
}
/**/

createSketchPage();
