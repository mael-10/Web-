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
const weapons = [
    {
        name: "stick",
        power: 5
    }, 

    {
        name: "Claw hammer", 
        power: 50
    },

    {
        name: "Sword", 
        power: 100
    }
];
const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"." 
    }, 

    {
        name: "store", 
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown], 
        text: "You enter the store."
    },

    {
        name: "cave", 
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown], 
        text: "You enter the cave. You see some monsters."

    }
];

//Initialize button

/*
Button have your special property called 'onclick', which you can use to determinate what heppens when someone click on the button: Here's a example:
button.click = functionToWhatSomethingHeppens;  

button1.onclick = goStore; --> We dont use the pharenteses when we call a function from  clicking on button, cuz u are calling the function whether clicked on botton. 

button.onclick = goStore(); The functin will immediately called before you click on button

It is called event handler and there are another properties besides button 
*/

button1.onclick = goStore;
button2.onclick = goCave; 
button3.onclick = fightDragon; 

function update(location){ //object identificator is the location cuz 'location = (all objects)'
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text; //With that backslash you can put a double quotes inside strings. It's called "Escape String"
}

function goTown(){
    update(locations[0]); //At that case it access all first elements within first object. Whether it access specify elements of object at first time, it will inicialization the function variable with the value of sepecify object. In that case it doesnst work to save up other values inside variables buttons cuz it is passing a parameter
}

function goStore(){
    update(locations[1]); 
}

function goCave(){
    update(locations[2]);
}

function fightDragon(){
    console.log("Fighting dragon."); 
}

function buyHealth(){
    if (gold >= 10) {

        gold -= 10; 
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        text.innerText = "You do not have enough gold to buy health.";   
    }
}

function buyWeapon(){

}

function fightSlime(){

}

function fightBeast(){

}

//Inner html controls the text that appers in html element and you should modif whatever text you would like. 