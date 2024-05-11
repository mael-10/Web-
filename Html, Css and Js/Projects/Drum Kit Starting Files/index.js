// document.querySelector("button").addEventListener("click", handClick); //we dont set the parentheses, because with that it's like a trigger

// function handClick() {
//     alert("I got clicked here");
// } 

var numberOfButton = document.querySelectorAll(".drum"); 
 
for (var i = 0; i < numberOfButton.length; i++) {
    numberOfButton[i].addEventListener("click", function () {
        alert("I got clicked here");
    } 
    );
}  