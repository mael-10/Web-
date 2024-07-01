let color = ["blue", "Rose", "Viollet", "Dark red"];
color.push("Brown"); 

console.log(color); 

let pushed = color.push("Green"); //Adiciona e conta os elementos do array
pushed = color.push("Purple");

console.log(pushed); // Retorna a quantidade de elementos dentro do array de maneira instantanea
console.log(color); 

//pushed = color.push(); Irá apeanas retorar o valor dos elmemtos

//Pode-se usar tanto o .lenght ou o .push 