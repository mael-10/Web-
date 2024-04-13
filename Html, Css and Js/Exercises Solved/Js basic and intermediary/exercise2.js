function main(getValueNumber) {
    console.log("Exectuando a primeira linha da funcao teste"); 
    var campeao = main2(getValueNumber, 5);
    console.log("O valor de tudo no final é " + campeao)
    
}

function main2(v1, v2) {
    return Math.floor(v1 / v2);
    
}


var number = prompt("Digite um número para começar");
main(number);