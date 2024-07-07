let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("monsterHealthText");
const goldText = document.querySelector("#goldText"); 
const locations = [];

//Initialize button

/*
Button have your special property called 'onclick', which you can use to determinate what heppens when someone click on the button: Here's a example:
button.click = functionToWhatSomethingHeppens;  

button1.onclick = goStore; --> We dont use the pharenteses when we call a function from  clicking on button, cuz u are calling the function whether clicked on botton. 

button.onclick = goStore(); The functin will immediately called before you click on button

It is called event handler and there are another properties besides button 
*/

function update(location){

}

function goTown(){
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. You see a sign that says \"Store\"."; //With that backslash you can put a double quotes inside strings. It's called "Escape String"
}

function goStore(){

    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You enter the store.";
}

function goCave(){
    console.log("Going to cave.");
}

function fightDragon(){
    console.log("Fighting dragon."); 
}

function buyHealth() {

}

function buyWeapon() {

}

button1.onclick = goStore;
button2.onclick = goCave; 
button3.onclick = fightDragon; 

//Inner html controls the text that appers in html element and you should modif whatever text you would like. 