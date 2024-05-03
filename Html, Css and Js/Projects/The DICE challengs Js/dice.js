var ramdomNumber1 = Math.floor((Math.random() * 6) + 1); // Gera o primeiro número 
var ramdomNumber2 = Math.floor((Math.random() * 6) + 1); 
var winDice = document.querySelector("h1");

var ArrayOfDice = [
    document.querySelector(".img1"),
    document.querySelector(".img2")
]; 

function Dice2() {

    if (ramdomNumber2 === 1) {
        ArrayOfDice[1].setAttribute("src", "images/dice1.png"); 
    } else if (ramdomNumber2 === 2) {
        ArrayOfDice[1].setAttribute("src", "images/dice2.png");  
    } else if (ramdomNumber2 === 3) {
        ArrayOfDice[1].setAttribute("src", "images/dice3.png");  
    } else if (ramdomNumber2 === 4) {
        ArrayOfDice[1].setAttribute("src", "images/dice4.png");  
    } else if (ramdomNumber2 === 5) {
        ArrayOfDice[1].setAttribute("src", "images/dice5.png");  
    } else {
        ArrayOfDice[1].setAttribute("src", "images/dice6.png");  
    }
}

function Dice1() {

    if (ramdomNumber1 === 1) {
        ArrayOfDice[0].setAttribute("src", "images/dice1.png"); 
    } else if (ramdomNumber1 === 2) {
        ArrayOfDice[0].setAttribute("src", "images/dice2.png");  
    } else if (ramdomNumber1 === 3) {
        ArrayOfDice[0].setAttribute("src", "images/dice3.png");  
    } else if (ramdomNumber1 === 4) {
        ArrayOfDice[0].setAttribute("src", "images/dice4.png");  
    } else if (ramdomNumber1 === 5) {
        ArrayOfDice[0].setAttribute("src", "images/dice5.png");  
    } else {
        ArrayOfDice[0].setAttribute("src", "images/dice6.png");  
    }
}

Dice1(); 
Dice2(); 

if (ramdomNumber1 > ramdomNumber2) {
    winDice.innerHTML = "Dice 1 Won 😎"; 
} else if (ramdomNumber1 < ramdomNumber2) {
    winDice.innerHTML = "Dice 2 Won 🥇"; 
} else {
    function timeTest() {
        winDice.innerHTML = "Refresh me!";  
    }

    setTimeout(timeTest, 1500); // Espera 1.5s para aparecer (chamar a função)

    winDice.innerHTML = "Draw!";  

}