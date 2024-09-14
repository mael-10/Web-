const equal = document.getElementById('result');
const cleanDisplay = document.getElementById('cleanDisplay');
const deleteDigit = document.getElementById('deleteDigit');
const point = document.getElementById('point');
const allNumbers = document.querySelectorAll('.number');
const allSignals = document.querySelectorAll('.signal');

function getIdNumber(teste, e){
    console.log(teste)
}

const basicOperations = () => {
    for(let i = 0; i < allSignals.length; i++){
        allSignals[i].addEventListener('click', function(){
            getIdNumber(allSignals[i].value);
        });
    }
}

const iterateNumbers = () => {
    for(let i = 0; i < allNumbers.length; i++){
        allNumbers[i].addEventListener('click', function(){
            getIdNumber(Number(allNumbers[i].innerText));
        });
    }
}

iterateNumbers();
basicOperations();