function fibonacciGenerator(n) {

    var outPut = []; //variável responsavel por receber o valor de retorno da função
    var first = 0; // variável para o primeiro número da sequência de fibonacci
    var second = 1; // variável para o segundo número da sequência de fibonacci
    var saveValue; // variável auxiliar para receber o valor da variável 'second'
    var result; // variável pare armazenar o valor da soma de 'first' e 'second';

    if (n >= 2) { //verifica se o número é maior ou igual a dois, pois todos os números da sequência, exceto o n === 1, tem o mesmo valor de começo 
        outPut.push(first, second); 
    } else if (n === 1) {
        outPut.push(first); // n === 1 é uma exceção 
    } 
    
    for (var i = 2; i < n ; i++) { // O loop sempre vai ser n === 2, pois de começo, eu tenho já dois valores declarados no array. 
       if (n > 2) {
            result = first + second;
            saveValue = second; 
            second = result; 
            first = saveValue; 
            outPut.push(result); //Para incrementar valores no array precisa de push 
        } 
    }

    return outPut; // retorne o valor para outPut 
}

outPut = fibonacciGenerator(2); // chamada da função 
console.log(outPut); // escreve o valor do array 