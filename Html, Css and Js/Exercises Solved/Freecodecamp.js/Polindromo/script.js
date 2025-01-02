const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

const isNotPolidrome = (text) =>{
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
            //Se tiver caracteres especiais, então o retira
           return  x = '';
        } else{
            polidromeTextInvert += x;
            return x.toLowerCase();
            
        }   
    });

    polidromeTextInvert === textPolindrome.join('') ? isPolidrome(text) : isNotPolidrome(text);
}

const blanckInput = () => {
    //Se for um falsy value, vai criar um alert
    !textInput.value ? alert("Please input a value") : checkPolindrome();
}

checkBtn.addEventListener('click', () => {
    blanckInput();
});

//Obg 2024