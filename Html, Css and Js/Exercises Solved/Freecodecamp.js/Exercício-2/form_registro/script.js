const sendForm = document.getElementById('registroForm');
const inputName = document.getElementById('nome');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('senha');
const inputAge = document.getElementById('age');
const inputCheckPassword = document.getElementById('confirmaSenha');
const inputErros = document.querySelectorAll('span');
const gender = document.getElementById('gender_id');
//var para verificar se todos os valores estão corretos
let ToSend = [];

//Função para validar se todos os valores estão corretos antes de serem enviados para um bd
function verifyToSend(){

    if(ToSend.some(n => n === false)){
        ToSend = [];
        return;
    }

    alert("It was sent to bd successfully");
    location.reload();
}

function verifyAge(){
    inputAge.value < 18 ? (inputErros[2].innerText = "Younger age! Can'n fill out the form", ToSend.push(false))  : inputAge.value > 120 ? (inputErros[2].innerText = "Are you alive???", ToSend.push(false)) : null;
    //Verificar se todos os campos estão corretos
    debugger;
    verifyToSend();
}

function verifyPassword(){
    inputPassword.value !== inputCheckPassword.value ? (inputErros[4].innerText = "The passwords must be the same", ToSend.push(false)) :  inputErros[4].innerText = '';
    verifyAge();
}

function errorMenssage(regex, position){

    inputErros[position].innerText = '';
    blankSpace();

    const mensagensErro = [
        "Name format is wrong! write correctly another name",
        "Email format is wrong! write correctly another Email",
        "Age format is wrong! write correctly another age",
        "Password format is wrong! write correctly another password with characters, number and special characters together"
    ];
    
    // Se regex for falso, atribui a mensagem de erro de acordo com a posição
    !regex ? (inputErros[position].innerText = mensagensErro[position], ToSend.push(false)) : null;
}

function validateRegex(){
    const regexArray = [
        inputName.value.match(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s']+$/),
        inputEmail.value.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/),
        inputAge.value.match(/\b\d{1,3}\b/),
        inputPassword.value.match(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{6,}$/), //letras, números e caracteres especias e no mínimo 6 caracteres
    ];

    regexArray.forEach((n, index) => {
        errorMenssage(n, index);
    })
}

function blankSpace(){
    inputErros[0].innerText = '';
    if(inputName.value.match(/^\s*$/)){
        inputErros[0].innerText = 'blanck space isnt allowed';
    }
}

sendForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validateRegex();
    verifyPassword();
});