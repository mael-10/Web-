const equal = document.getElementById('result');
const cleanDisplay = document.getElementById('cleanDisplay');
const deleteDigit = document.getElementById('deleteDigit');
const point = document.getElementById('point');
const allNumbers = document.querySelectorAll('.number');
const allSignals = document.querySelectorAll('.signal');
const displayScreen = document.getElementById('display');
let displayInput = '';

function finalResult(operationString){ 

    validatorInput(displayScreen.value); 

    let result = eval(operationString);
    console.log(result)
    Math.abs(Number.isInteger(result)) || result === 0 || result.toFixed(1) || result.toFixed(2) ? displayScreen.value = result : displayScreen.value = result.toFixed(3);

    result = 0;
}

function validatorInput(validation){

    for (let i = 0; i < allSignals.length; i++) {
        if(validation[0] === allSignals[i].innerText){
            alert(`Apenas números no começo!`);
            displayScreen.value = '';
        }    
    }
};

function display(numberOperations){

    let inputOperation = '';
    displayInput += numberOperations; 

    //Irá fazer a substituição do * para × e do ÷ para '/' no input
    if(numberOperations === '*'){
        inputOperation += '×';

    } else if(numberOperations === '/'){
        inputOperation += '÷';

    } else{
        inputOperation += numberOperations;

    }

    displayScreen.value += inputOperation;  // Atualiza o valor do display concatenando o novo valor
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

iterateNumbers();
basicOperations();