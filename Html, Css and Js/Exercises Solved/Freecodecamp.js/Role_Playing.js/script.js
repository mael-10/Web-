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

//Initialize button

/*
Button have your special property called 'onclick', which you can use to determinate what heppens when someone click on the button: Here's a example:
button.click = functionToWhatSomethingHeppens;  

button1.onclick = goStore; --> We dont use the pharenteses when we call a function from  clicking on button, cuz u are calling the function whether clicked on botton. 

button.onclick = goStore(); The functin will immediately called before you click on button

It is called event handler and there are another properties besides button 
*/


function goStore(){
    console.log("Going to store.");
}

function goCave(){
    console.log("Going to cave.");
}

function fightDragon(){
    console.log("Fighting dragon."); 
}

button1.onclick = goStore;
button2.onclick = goCave; 
button3.onclick = fightDragon; 