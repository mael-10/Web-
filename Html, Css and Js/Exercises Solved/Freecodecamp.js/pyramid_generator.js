//node pyramid_generator.js
//Pyramid generator resolved of freecodecamp!!!

const character = '#'; 
const counter = 8; 
const rows = []; 

function padRow(rowNumber, rowCount) { //Os parâmetros servem para mudar o resultado do retorno da função de maneira dinâmica e de forma sutilmente

    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 0; i < counter; i++) {
    rows.push(padRow(i+1, counter)); //Vai repetir a quantidade de caracteres de acordo com a variáel i. Adiciona 1, pois vai começar com o valor 1 e não zero
}

let result = ""; //Adiciona valor vazio, pois não pode concatenar variáveis com valores vazio

for (const linhas of rows) { //A variável linha recebe a sequência das posições do array (uma por vez) a cada vez que o loop roda (variável escopo de bloco)
    result = result + "\n" + linhas;
}

console.log(rows);
console.log(result); 