var ramdomNumber1 = Math.floor((Math.random() * 6) + 1); // Gera o primeiro número do dado  
var ramdomNumber2 = Math.floor((Math.random() * 6) + 1); // Gera o sgundo número do dado 
var winDice = document.querySelector("h1");

var ArrayOfDice = [ // Array para selecionar os valores da imagem 1 e a imagem 2
    document.querySelector(".img1"),
    document.querySelector(".img2")
]; 

function Dice2() {

    if (ramdomNumber2 === 1) { // Nessa função gera as imagens do segundo dado de acordo com o número 
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

function Dice1() { // Nessa função gera as imagens do primeiro dado de acordo com o número 

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

Dice1(); // Chamada da Função do dado 1 
Dice2(); // Chamada da Função do dado 2

if (ramdomNumber1 > ramdomNumber2) { // Se o dado 1 for maior que o dois, então ele ganha 
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