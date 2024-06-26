//'node pyramid_generator.js'
//Pyramid generator resolved of freecodecamp!!!

const character = '#'; 
const counter = 8; 
const rows = [];
const newRows = []; 

function padRow(rowNumber, rowCount) { //Os parâmetros servem para mudar o resultado do retorno da função de maneira dinâmica e de forma sutilmente

    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= counter; i++) {
    rows.push(padRow(i, counter)); //Vai começar com o valor de 1 e vai até o 8. (O valor do i++ somente é incrementado quando o loop termina)
}

let result = ""; //Adiciona valor vazio, pois não pode concatenar variáveis com valores vazio

for (const linhas of rows) { //A variável linha recebe a sequência das posições do array (uma por vez) a cada vez que o loop roda (variável escopo de bloco)
    result = result + "\n" + linhas;
}

console.log(rows);
console.log(result); 


//Inverted Pyramid 
 
let result2 = ""; 

// for(let i = counter; i > 0; i--) { //The first time that a number come up in loop, the value is unchanged in the first time 
//     newRows.push(padRow(i, counter));
// }

// for (const linhas of newRows) { 
//     result2 = result2 + "\n" + linhas;
// }

// console.log(newRows); 
// console.log(result2); 


for (let i = 1; i <= counter; i++){
    newRows.unshift(padRow(i, counter)); 
}

for (const linhas of newRows) { 
    result2 = result2 + "\n" + linhas;
}

console.log(newRows); 
console.log(result2); 


//1- pop, 2- push --> 1 - Retirar um elemento do array da última posição. 2 - Colocar um elemento do array na última posição.
//1- Shift, 2- Unshifted --> 1 - Retirar um elemento do array na primeira prosição array. 2 - Color um elemento do array na primeira prosição array.
