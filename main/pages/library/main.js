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
		.replace(/;/g, "&#59;")
		.replace(/\//g, "&#x2F;");
}

let bookTitle = null;
let bookAuthor = null;
let bookReleaseDate = null;
let bookPageNum = null;
let bookSubmit = document.querySelector("#submit");
let form = document.querySelector("#input-form");

function Book(title, author, release, pages) {
	this.title = title;
	this.author = author;
	this.release = release;
	this.pages = pages;
}

bookSubmit.addEventListener("click", function (event) {
	event.preventDefault();
	bookTitle = document.querySelector("#title").value;
	bookAuthor = document.querySelector("#author").value;
	bookReleaseDate = document.querySelector("#release").value;
	bookPageNum = document.querySelector("#pagenum").value;

	if (
		bookTitle.length > 20 ||
		bookAuthor.length > 20 ||
		bookReleaseDate.length > 20 ||
		bookPageNum.length > 20
	) {
		alert("Values cannot exceed 20 characters.");
		console.log("Alert sent.");
		return;
	}

	if (
		bookTitle.length == 0 ||
		bookAuthor.length == 0 ||
		bookReleaseDate.length == 0 ||
		bookPageNum.length == 0
	) {
		alert("All values must be filled.");
		return;
	}

	alert(
		"For security purposes, you cannot add books. To see how this works, delete the `return` statement on Line 61."
	);
	return;

	addBook(new Book(bookTitle, bookAuthor, bookReleaseDate, bookPageNum));
	console.log(bookTitle);
});

function addBook(book) {
	const bookContainer = document.querySelector("#books-list");
	const element = document.createElement("div");
	let checkbox = document.createElement("input");
	checkbox.type = "checkbox";

	bookContainer.appendChild(element);
	element.classList.add("book");

	let title = book.title + "\xa0".repeat(20 - book.title.length);
	let author = book.author + "\xa0".repeat(20 - book.author.length);
	let release = book.release + "\xa0".repeat(20 - book.release.length);
	let pages = book.pages + "\xa0".repeat(20 - book.pages.length);
	// adds spaces to the title so it's always 20~ chars

	element.textContent =
		"Title: " +
		title +
		" | Author: " +
		author +
		" | Release Date: " +
		release +
		" | Pages: " +
		pages +
		" | Is Read: ";
	element.appendChild(checkbox);
}
