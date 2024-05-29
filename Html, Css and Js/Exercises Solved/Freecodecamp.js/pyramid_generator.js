let count = 9;
row = ['']; 

for (let i = 0; i < count; i++) {
    row[i+1] = row[i] + "#"; // Sempre adiciona o sucessor! assim o array vai ter 10 posições, uma vazia e o resto com os 9 números incrementados 
}

//Tem que ser o sucessor, pois os valores no array não podem ser nulos

console.log(row); 
console.log("\n \n"); 

for (const rowsElement of row) {
    console.log(rowsElement); 
}

//node pyramid_generator.js

// ou 

// let count = 9;
// let row = ['']; 

// for (let i = 0; i < count; i++) {
//     // Inicializa a próxima posição se não estiver definida
//     if (row[i+1] === undefined) {
//         row[i+1] = ''; 
//     }
//     // Adiciona "#" ao valor da linha atual e armazena na próxima posição
//     row[i+1] = row[i] + "#";
// }

// console.log(row); 
// console.log("\n \n"); 

// for (const rows of row) {
//     console.log(rows); 
// }