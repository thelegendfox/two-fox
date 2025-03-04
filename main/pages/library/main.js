//Container, then title, then author, then everything else, all in one line
//Consider using character limits
//Consider using sorting algorithms

function escape(input) {
	const text = String(input);
	return text
		.replace(/(["'\\\n\r\t\b\f])/g, "\\$1")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/&/g, "&amp;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;")
		.replace(/\//g, "&#x2F;");
}

let bookTitle = document.querySelector("#title");
let bookAuthor = document.querySelector("#author");
let bookReleaseDate = document.querySelector("#release");
let bookPageNum = document.querySelector("#pagenum");
let bookIsRead = document.querySelector("#read");
let bookSubmit = document.querySelector("#submit");
let form = document.querySelector("#input-form");

function Book(title, author, release, pages, read) {
	this.title = title;
	this.author = author;
	this.release = release;
	this.pages = pages;
	this.read = read;
}

form.addEventListener("submit", function (event) {
	event.preventDefault();
});
