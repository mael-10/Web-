var ramdomNumber1 = Math.floor((Math.random() * 6) + 1); 
var ramdomNumber2 = Math.floor((Math.random() * 6) + 1); 
var winDice = document.querySelector("h1");

var randomDiceImage = [
    "images/dice" + ramdomNumber1 + ".png", // Número do arquivo aleatório (dado 1)
    "images/dice" + ramdomNumber2 + ".png"  // Número do arquivo aleatório (dado 2)
]; 

var images1 = document.querySelector(".img1"); 
var images2 = document.querySelector(".img2"); 

images1.setAttribute("src", randomDiceImage[0]); 
images2.setAttribute("src", randomDiceImage[1]); 

if (ramdomNumber1 > ramdomNumber2) {
    winDice.innerHTML = "Dice 1 Won 😎"; 
} else if (ramdomNumber1 < ramdomNumber2) {
    winDice.innerHTML = "Dice 2 Won 🥇"; 
} else {
    function timeTest() {
        winDice.innerHTML = "Refresh me!";  
    }

    setTimeout(timeTest, 2000); 

    winDice.innerHTML = "Draw!";  
}

var button = document.querySelector(".btn"); 

button.addEventListener("click", function() {
    location.reload(); // recarrega a página 
}
)
