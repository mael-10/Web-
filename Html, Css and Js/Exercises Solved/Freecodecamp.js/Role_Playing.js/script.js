let xp = 0;
let health = 100;
let gold = 500;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1"); //Buttons selected from html
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const goldText = document.querySelector("#goldText"); 
const weapons = [ 
    { name: 'stick', power: 5},
    { name: 'dagger', power: 30},
    { name: 'claw hammer', power: 50},
    { name: 'sword', power: 100 }
];
const monsters = [
    {name: "slime", level: 2, health: 15},
    {name: "fanged beast", level: 8, health: 60},
    {name: "dragon", level: 20, health: 300}
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
    },
    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"], 
        "button functions": [attack, dodge, goTown],
        text: "You are fighting a monster."
    }, 
    {
        name: "kill monster", 
        "button text": ["Go to town square", "Go to town square", "Go to town square"],
        "button functions": [goTown, goTown, easterEgg],
        text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
    }, 
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You die. &#x2620;" //emoticon code

    },
    {
        name: "win",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You defeat the dragon! YOU WIN THE GAME! &#x1F389;" //emoticon code

    }, 
    {
        name: "easter egg",
        "button text": ["2", "8", "Go to town square?"],
        "button functions": [pickTwo, pickEight, goTown],
        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
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
    document.querySelector('#monsterStats').style.display = 'none';
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerHTML = location.text; //With that backslash you can put a double quotes inside strings. It's called "Escape String"
}

function goTown(){
    update(locations[0]); //At that case it access all first elements within first object. Whether it access specify elements of object at first time, it will inicialization the function variable with the value of sepecify object. In that case it doesnst work to save up other values inside variables buttons cuz it is passing a parameter
    
}

function goStore(){ //It gonna call the array locations and select the position of proper object
    update(locations[1]); 
}

function goCave(){
    update(locations[2]);
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
    if(currentWeaponIndex <= weapons.length - 1){ //It verify wether bought all weapons. Wether do that it doesnt cotinue the operation
        if (gold >= 30){ //Verify if you have got enouth money
            gold -= 30;
            currentWeaponIndex++; //weapon selector (index) array weapons
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeaponIndex].name;
            text.innerText = "You bought a " + newWeapon;
            inventory.push(newWeapon);
            text.innerText += " In your inventory you have: " + inventory;
            
        } else{
            text.innerText = "You do not have enough gold to buy a weapon."; 
        }
    } else {
        text.innerText = "You already have the most powerful weapon!"; 
    }

    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
}

function sellWeapon(){ //Funtion to sell weapons
    if(inventory.length > 1){ //If in your inventory has more than one weapon, you can sell weapons from inventory until greater than one
        gold += 15; 
        goldText.innerText = gold; //Convert number in text
        let currentWeapon = inventory.shift(); 
        text.innerText = "You sold a " + currentWeapon + "."; 
        text.innerText += " In your inventory u have: " + inventory;
    } else{
        text.innerText = "Don't sell your only weapon!";
    }

}

//functions for each monster

function fightSlime(){ 
    fighting = 0; //index counter of monsters array for select the correct monster
    goFight();
}

function fightBeast(){
    fighting = 1;
    goFight();
}

function fightDragon(){
    fighting = 2;
    goFight();
}

function goFight(){ //Function to show up senttings to fight agains the sepecify monster acordding 'fighting'var number
    update(locations[3]);// Show option to fight against monster
    monsterHealth = monsters[fighting].health;
    const monsterStats = document.querySelector('#monsterStats');
    monsterStats.style.display = 'block';
    monsterName.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;

}   

function attack(){ //Call function attack
    text.innerText = "The " +  monsters[fighting].name + " attacks.";
    text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name + ".";
    health -= getMonsterAttackValue(monsters[fighting].level);
    if(isMonsterHit()){
        monsterHealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp) + 1;
    } else{
        text.innerText += " You miss.";
    }
    healthText.innerText = health; //Update your health
    monsterHealthText.innerText = monsterHealth; //Update him health
    if(health <= 0){ //If your life goes out you die
        health = 0;
        healthText.innerText = health;
        lose();
    } else if (monsterHealth <= 0){ //But if you is alive u hurt the monster (All monsters)
        if (fighting === 2){ //Verify if monster has live equal to 0
            winGame();
        } else {
            defeatMonster();  //Call function to for you defeted the boss
        }
    }

    if(Math.random() <= .1 && inventory.length !== 1){
        text.innerText += " Your " + inventory.pop() + " breaks."; //Remove and Return on String
        currentWeaponIndex--;
    }
}

function getMonsterAttackValue(level){
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    return hit > 0 ? hit : 0; //Like a if else statment
}

function isMonsterHit(){
    return Math.random() > .2 || health < 20; //Math.random is generating a value between 0 and 1 (always less than 1). If math.random generate greater than 0.2 the value return value will be true or health is less than 20
}

function dodge(){
    text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

function defeatMonster(){ 
    gold += Math.floor(6.7 * monsters[fighting].level);
    xp += monsters[fighting].level;
    goldText.innerText = gold;
    xpText.innerText = xp;
    update(locations[4]);
}

function lose(){
    update(locations[5]);
}

function winGame(){
    update(locations[6]);
}

function restart(){
    xp = 0; 
    health = 100; 
    gold = 50;
    currentWeaponIndex = 0;
    inventory = [];
    goldText.innerText = gold;
    healthText.innerText = 100;
    xpText.innerText = xp;
    goTown();
}

function easterEgg(){
    update(locations[7]);
}

function pickTwo(){
    pick(2);
}

function pickEight(){
    pick(8);
}

function pick(guess){
    const numbers = [];

    while(numbers.length < 10){
       numbers.push(Math.floor(Math.random() * 11));
    }

    text.innerText = "You picked " + guess + ". Here are the random numbers:\n";

    for(const number of numbers){ //Will pass each element for number
        text.innerText += number + "\n";
    }

    if(numbers.includes(guess)){// Verify if it includes inside array
        text.innerText += "Right! You win 20 gold!";
        gold += 20;
        goldText.innerText = gold;
    } else{
        text.innerText += "Wrong! You lose 10 health!";
        health -= 10;
        healthText.innerText = health;

        if(health <= 0){
            lose();
        } 
    }
} 

//Inner html controls the text that appers in html element and you should modif whatever text you would like. 