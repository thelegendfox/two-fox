/*this is eventually gonna be really ugly but i dont know another way*/
/*sorry*/

let page1Button = document.getElementById("page1").value;

function redirectToPage() {
 window.location.href = page1Button;
 console.log("redirected")
}

function redirectDropdownPage() {
    var dropdown = document.getElementById("redirectDropdown");
    var selectedValue = dropdown.value;
        window.location.href = selectedValue;
}