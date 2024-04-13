var name = prompt("What's your name?"); 
var firstLetter = name.slice(0,1); 
var firstLetterUpper = firstLetter.toUpperCase(); 
var secondLetter = name.slice(1); 
var lowerCaseLetter = secondLetter.toLowerCase();

alert("Hello, " + firstLetterUpper + lowerCaseLetter); 