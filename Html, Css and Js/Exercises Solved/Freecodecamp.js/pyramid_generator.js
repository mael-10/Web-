let count = 9; 
let row = ['']; //Iniciar com um valor vazio para evitar erros 

for (let i = 0; i < count; i++) {
    row[i+1] = row[i] + "#"; //Concatena com a posição anterior, para adicionar de maneira sequêncial
}

//Tem que ser o sucessor, pois os valores no array não podem ser nulos

console.log(row); 
console.log("\n \n"); 

for (const rowsElement of row) {
    console.log(rowsElement); 
}

//node pyramid_generator.js





//Pyramid generator resolved of freecodecamp!!!

console.log("\n \n"); 

const character = '#'; 
const counter = 8; 
const rows = []; 

function padRow(name) { //Os parâmetros servem para mudar o resultado do retorno da função de maneira dinâmica e de forma sutilmente
    return name; 
}

const call = padRow("Hello World"); //Argumento é o valor que vai ser passado para a variável 

for (let i = 0; i < counter; i++) {
    rows.push(character.repeat(i+1)); //Vai repetir a quantidade de caracteres de acordo com a variáel i. Adiciona 1, pois vai começar com o valor 1 e não zero
}

let result = ""; //Adiciona valor vazio, pois não pode concatenar variáveis com valores vazio

for (const linhas of rows) { //A variável linha recebe a sequência das posições do array (uma por vez)
    result = result + "\n" + linhas;
}

console.log(result); 