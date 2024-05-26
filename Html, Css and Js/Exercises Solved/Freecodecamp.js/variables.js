// const must be innicializaton. const variable can not reassigned  

const rows = [];
console.log(rows);

/*
    for(iterator; condiction; iteration){

    }
*/

let array = ['apple', 'banana', 'cherry'];

for (const value of array) {
  console.log(value);
}

console.log("\n");

// Isso se chama iterar: Uma maneira de accessar e percorrer os elementos do array de forma eficiênte e sistemática. O código acima é a mesma coisa que o de baixo:  

for (let i = 0; i < array.length; i++) {
    console.log(array[i]); 
}

// O nome disso se chama iteração de arrays, que é uma meneira mais fácil de manipular os elementos. Quando for iterar alguma coisa, o recomendado é usar valores const e let. Menos o var. 