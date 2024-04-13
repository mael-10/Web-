var guestList = ["Angela", "Ismael", "Samuel", "Antonio", "João"]; 
var guestName = prompt("What's your firts name?"); 

var isGuest = guestList.includes(guestName); 

if (isGuest === true) {
        console.log("You are on guestList"); 
} else {
        console.log("You are not on guestList"); 
}