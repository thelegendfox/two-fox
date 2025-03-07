/*this is eventually gonna be really ugly but i dont know another way*/
/*sorry*/

// let page1Button = document.getElementById("page1").value;
// let page2Button = document.getElementById("page2").value;
let page3Button = document.getElementById("page3").value;
let page4Button = document.querySelector("#page4").value;
let page5Button = document.querySelector("#page5").value;
let page6Button = document.querySelector("#page6").value;

// function redirectToLandingPage() {
// 	window.location.href = page1Button;
// 	console.log("redirected");
// }

// function redirectToRPSPage() {
// 	window.location.href = page2Button;
// 	console.log("redirected");
// }

function redirectToETSPage() {
	window.location.href = page3Button;
	console.log("redirected");
}

function redirectToCalcPage() {
	window.location.href = page4Button;
	console.log("redirected");
}

function redirectToAdminPage() {
	window.location.href = page5Button;
	console.log("redirected");
}

function redirectToLibraryPage() {
	window.location.href = page6Button;
	console.log("redirected");
}

function redirectDropdownPage() {
	var dropdown = document.getElementById("redirectDropdown");
	var selectedValue = dropdown.value;
	window.location.href = selectedValue;
}
