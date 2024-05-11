var guestList = ["Angela", "Ismael", "Samuel", "Antonio", "Neuza"]; 
var guestName = prompt("What's your firts name?"); 

var isGuest = guestList.includes(guestName); // Recieve the bull value

if (isGuest === true) {
        console.log("You are on guestList"); 
} else {
        console.log("You are not on guestList"); 
}