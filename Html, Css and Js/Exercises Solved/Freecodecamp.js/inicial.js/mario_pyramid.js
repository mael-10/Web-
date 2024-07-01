//Inverted pyramid 

let count = 9;
let invertRow = '';

for (let i = count; i > 0; i--) {
    invertRow = "#".repeat(i); 
    console.log(invertRow);
}

console.log("\n \n"); 

//Normal pyramid  

let row = ''; 

for (let i = 0; i < count; i++){
    row += "#";
    console.log(row); 
}