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
let bookIsRead = null;
let bookSubmit = document.querySelector("#submit");
let form = document.querySelector("#input-form");

function Book(title, author, release, pages, read) {
	this.title = title;
	this.author = author;
	this.release = release;
	this.pages = pages;
	this.read = read;
}

bookSubmit.addEventListener("click", function (event) {
	event.preventDefault();
	bookTitle = document.querySelector("#title").value;
	bookAuthor = document.querySelector("#author").value;
	bookReleaseDate = document.querySelector("#release").value;
	bookPageNum = document.querySelector("#pagenum").value;
	bookIsRead = document.querySelector("#read").checked;

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

	addBook(
		new Book(bookTitle, bookAuthor, bookReleaseDate, bookPageNum, bookIsRead)
	);
	console.log(bookTitle);
});

function addBook(book) {
	const bookContainer = document.querySelector("#books-list");
	const element = document.createElement("div");

	bookContainer.appendChild(element);
	element.classList.add("book");

	let title = book.title + "\xa0".repeat(20 - book.title.length);
	let author = book.author + "\xa0".repeat(20 - book.author.length);
	let release = book.release + "\xa0".repeat(20 - book.release.length);
	let pages = book.pages + "\xa0".repeat(20 - book.pages.length);
	// let read = book.read + "\xa0".repeat(19 - book.read.length);
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
		" | Is Read: " +
		book.read;
}
