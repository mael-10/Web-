// const must be innicializaton. const variable can not reassigned  

const rows = [];
console.log(rows);

let storeFruit = ''; //Inacializa com vazio para evitar que dê um valor de retorno vazio

/*
    for(iterator; condiction; iteration){

    }
*/

let fruts = ['apple', 'banana', 'cherry'];

for (const value of fruts) { //Irá "value irá receber o valor cada vez que passa no loop"
  console.log(value);
  storeFruit = storeFruit += value + ",";
}

// '+=' só vai incrementar quando houver um valor existente. 
// Na primeira vez que passa pelo loop, storeFruit tem valor vazio, 
// então a ',' não vai ser incrementada. Já o '+' vai concatenar/juntar 
// independente se há ou não valor já atribuído a storeFruit.

// O '+=' é mais usado para incrementar números maiores que 1 dentro de uma variável. 


console.log("\n");

// Isso se chama iterar: Uma maneira de accessar e percorrer os elementos do array de forma eficiênte e sistemática. O código acima é a mesma coisa que o de baixo:  

for (let i = 0; i < fruts.length; i++) {
  console.log(fruts[i]); 
}

// O nome disso se chama iteração de arrays, que é uma meneira mais fácil de manipular os elementos. Quando for iterar alguma coisa, o recomendado é usar valores const e let. Menos o var. 

console.log("\n");

console.log(storeFruit);