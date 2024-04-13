var bottle99 = 99; 
var bottle98 = 98; 
var count = 99; 
var value; 

function bottle(b99, b98) {

    if (b99 >= 2) {
         return (b99 + " bottles of beer on the wall, " + b99 + " bottles of beer. Take one down and pass it around, " + b98 +" bottles of beer on the wall.")
        
    } else if (b99 === 1) {
        return (b99 + " bottles of beer on the wall, " + b99 + " bottles of beer. Take one down and pass it around, no more bottles of beer on the wall.") 
        
    } else if (b99 === 0) {
         return ("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.") 
        
    }
}

while (count >= 0) {
    value = bottle(bottle99, bottle98); 
    count--; 
    bottle99--;
    bottle98--;
    console.log(value); 
}