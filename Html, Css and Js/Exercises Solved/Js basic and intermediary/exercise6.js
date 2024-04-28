var outPut = []; 
var count = 1; 

var l = prompt("Type the repetition number"); 


function fizBuzz() {
    
    if (count % 3 === 0 || count % 5 === 0) {
        outPut.push("FizBuzz"); 
        
    } else if (count % 3 === 0) {
        outPut.push("Fiz"); 
        
    } else if (count % 5 === 0) {
        outPut.push("fizBuzz"); 
        
    } else {
        outPut.push(count)
    }
    
    count++;
    console.log(outPut);
}
for (var i = 0; i < l; i++) {
    fizBuzz();     
} 