let homeButton = document.querySelector("#home-button");

homeButton.addEventListener("click", () => {
	window.location.href = "../../../index.html";
	console.log("redirected");
});
