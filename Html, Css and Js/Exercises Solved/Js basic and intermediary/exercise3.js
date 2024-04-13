var yourName = prompt("Type your name: ");
var gfOrbf = prompt("Type the name of partner: ");

var lovePercentage = Math.floor((Math.random() * 100) + 1);

alert(yourName + " and " + gfOrbf + " have love score: " + lovePercentage + "%");

if (lovePercentage > 70) {
     var a = alert("Loooooooveee"); 
} 

if (lovePercentage > 30 && lovePercentage <= 70) {
    var b = alert("Interesting"); 
} 

// === check wheter data type and value is equal 
// == check wheter the value is equal, but not the data type 