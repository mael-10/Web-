const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

const isntPolidrome = (text) =>{
    result.innerText = `${text} is not a palindrome`;
}

const isPolidrome = (text) => {
    result.innerText = `${text} is a palindrome`;
}

const checkPolindrome = () => {
    let polidromeTextInvert = "";
    //Preserva o valor original
    const text = textInput.value;
    //Faz a string virar um array
    const textSplit = text.split('');
    //Tira os não caracteres especias e coloca em lower case do array
    const textPolindrome = textSplit.map((x) => {
        if(x.match(/[\W_]/g)){
           return  x = '';
        } else{
            return x.toLowerCase();
        }   
    });

    //Adiciona para inverter
    for(let i = textPolindrome.length - 1; i >= 0; i--){
        polidromeTextInvert += textPolindrome[i];
    }

    polidromeTextInvert === textPolindrome.join('') ? isPolidrome(text) : isntPolidrome(text);
}

const blanckInput = () => {
    //Se for um falsy value, vai criar um alert
    !textInput.value ? alert("Please input a value") : checkPolindrome();
}

checkBtn.addEventListener('click', () => {
    blanckInput();
});

//Obg 2024