const equal = document.getElementById('result');
const cleanDisplay = document.getElementById('cleanDisplay');
const deleteDigit = document.getElementById('deleteDigit');
const point = document.getElementById('point');
const allNumbers = document.querySelectorAll('.number');
const allSignals = document.querySelectorAll('.signal');
const displayScreen = document.getElementById('display');
let result = 0;

function getOperation(validador){
    

}

function display(numberOperations){

    console.log(numberOperations);
    displayScreen.value += numberOperations;  // Atualiza o valor do display concatenando o novo valor
    console.log(displayScreen.value);  // Exibe o valor atual do display

    if(numberOperations === '+' || numberOperations === '-' || numberOperations === '*' || numberOperations === '/'){
        result += `${numberOperations}`;
        console.log(result)
    } else{
        result += numberOperations;
    }
 
    
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
            display(Number(allNumbers[i].innerText));
        });
    }
}

iterateNumbers();
basicOperations();