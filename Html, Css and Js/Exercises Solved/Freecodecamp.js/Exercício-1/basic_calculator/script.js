const equal = document.getElementById('result');
const cleanDisplay = document.getElementById('cleanDisplay');
const deleteDigit = document.getElementById('deleteDigit');
const point = document.getElementById('point');
const allNumbers = document.querySelectorAll('.number');
const allSignals = document.querySelectorAll('.signal');
const displayScreen = document.getElementById('display');
let displayInput = '';
console.log(allSignals)

function finalResult(operationString){ 

    if(validatorInput(displayScreen.value)){
        let result = eval(operationString);
        console.log(result)
        Math.abs(Number.isInteger(result)) || result === 0 ? displayScreen.value = result : displayScreen.value = result.toFixed(3);

        result = 0;
    }
}

function validatorInput(validation){

    let repeatSignals = [];

    //Transforma todos os elementos do array individual em string
    for(const iterate of Array.from(validation)){ 
        repeatSignals.push(iterate.toString());
    }

    //Verifica se há um sinal no começo da string
    for (let i = 0; i < allSignals.length; i++) {
        if(validation[0] === allSignals[i].innerText){
            alert(`Apenas números no começo!`);
            displayScreen.value = '';
            return null;
        }    
    }
    
    for (let i = 1; i < repeatSignals.length - 1; i++){
        if(['+', '-', '÷', '×'].includes(repeatSignals[i]) && ['+', '-', '÷', '×'].includes(repeatSignals[i + 1])){
            alert(`Não pode os sinais +, -, ÷, × repetidos`);
            displayScreen.value = '';
            validation = '';
            repeatSignals = [];
            displayInput = '';
            return null
        }
    }
    
};

function display(numberOperations){

    let inputOperation = '';
    displayInput += numberOperations; //Irá concatenar tudo em uma só string para depois ser realizado o cáculo

    //Irá fazer a substituição do * para × e do ÷ para '/' no input
    if(numberOperations === '*'){
        inputOperation += '×';

    } else if(numberOperations === '/'){
        inputOperation += '÷';

    } else{
        inputOperation += numberOperations;

    }

    displayScreen.value += inputOperation; //inputOperation é apenas uma variável para atualizar o valor do input displayScreen
}

const basicOperations = () => {
    for(let i = 0; i < allSignals.length; i++){
        allSignals[i].addEventListener('click', function(){
            display(allSignals[i].value);
        });
    }
}

const iterateNumbers = () => {
    for(let i = 0; i < allNumbers.length; i++){
        allNumbers[i].addEventListener('click', function(){
            display(allNumbers[i].innerText);
        });
    }
}

equal.addEventListener('click', function(){
    finalResult(displayInput);
});

cleanDisplay.addEventListener('click', function(){
    displayScreen.value = '';
    displayInput = '';
})

iterateNumbers(); //chama a função para iterar sobre os sinais
basicOperations(); //chama a função para iterar sobre os números