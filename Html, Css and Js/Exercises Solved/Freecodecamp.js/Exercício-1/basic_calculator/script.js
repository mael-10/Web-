const equal = document.getElementById('result');
const cleanDisplay = document.getElementById('cleanDisplay');
const deleteDigit = document.getElementById('deleteDigit');
const point = document.getElementById('point');
const allNumbers = document.querySelectorAll('.number');
const allSignals = document.querySelectorAll('.signal');
const displayScreen = document.getElementById('display');


function finalResult(operationString){

    const result = eval(operationString);
    displayScreen.value = result;
    
}

function display(numberOperations){

    console.log(numberOperations);
    displayScreen.value += numberOperations;  // Atualiza o valor do display concatenando o novo valor
    console.log(displayScreen.value);  // Exibe o valor atual do display

 
    equal.addEventListener('click', function(){
        finalResult(displayScreen.value);
    });
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

iterateNumbers();
basicOperations();