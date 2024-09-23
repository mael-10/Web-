const equal = document.getElementById('result');
const cleanDisplay = document.getElementById('cleanDisplay');
const deleteDigit = document.getElementById('deleteDigit');
const point = document.getElementById('point');
const allNumbers = document.querySelectorAll('.number');
const allSignals = document.querySelectorAll('.signal');
const displayScreen = document.getElementById('display');
let displayInput = '';

function finalResult() { 
    if (validatorInput(displayScreen.value)) {
        // Substitui os sinais para o eval funcionar corretamente
        let sanitizedString = displayInput.replace(/×/g, '*').replace(/÷/g, '/');
        let result = eval(sanitizedString); // Use eval aqui
        displayScreen.value = Number.isInteger(result) ? result : result.toFixed(2); //Verifica se um número é interio
        displayInput = ''; // Limpa a entrada após o cálculo
    }
}

function validatorInput(validation) {
    let repeatSignals = Array.from(validation);

    // Verifica se o primeiro caractere é um sinal
    if (['+', '-', '÷', '×'].includes(validation[0])) {
        alert(`Apenas números no começo!`);
        displayScreen.value = '';
        displayInput = '';
        return false; // Retorna falso para indicar erro
    }

    // Verifica se sinais estão repetidos
    for (let i = 1; i < repeatSignals.length - 1; i++) {
        if (['+', '-', '÷', '×'].includes(repeatSignals[i]) && ['+', '-', '÷', '×'].includes(repeatSignals[i + 1])) {
            alert(`Não pode os sinais +, -, ÷, × repetidos`);
            displayScreen.value = '';
            displayInput = '';
            return false; // Retorna falso para indicar erro
        }
    }
    return true; // Retorna verdadeiro se tudo estiver certo
}

function display(numberOperations) {
    displayInput += numberOperations; // Irá concatenar tudo em uma só string para depois ser realizado o cálculo
    let inputOperation = numberOperations.replace(/\*/g, '×').replace(/\//g, '÷'); //substituição dos sinais vizuais


    displayScreen.value += inputOperation; // Atualiza o valor do input displayScreen
}

const basicOperations = () => {
    for (let i = 0; i < allSignals.length; i++) {
        allSignals[i].addEventListener('click', function() {
            display(allSignals[i].value);
        });
    }
}

const iterateNumbers = () => {
    for (let i = 0; i < allNumbers.length; i++) {
        allNumbers[i].addEventListener('click', function() {
            display(allNumbers[i].innerText);
        });
    }
}

equal.addEventListener('click', function() {
    finalResult();
});

cleanDisplay.addEventListener('click', function() {
    displayScreen.value = '';
    displayInput = '';
})

iterateNumbers(); // Chama a função para iterar sobre os números
basicOperations(); // Chama a função para iterar sobre os sinais