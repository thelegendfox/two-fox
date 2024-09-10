/*this is really ugly but i dont know another way*/
/*sorry*/

let page1Button = document.getElementById("page1").value;

function redirectToPage() {
 window.location.href = page1Button;
 console.log("redirected")
}


console.log(page1Button + " <<- this is the page1Button value"); /*remove before release*/