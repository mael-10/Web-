const dataText = document.getElementById('datetime'); 
const buttonColor = document.querySelectorAll('.flexrow-container div');
const body = document.querySelector('body');

const zeroFill = n => {
    return ('0' + n).slice(-2); //Adiciona 0 e paga somente os os dois últimos digitos
}

const interval = setInterval(() => { //Essa função recebe dois parametros
    const date = new Date();
    const dataHora = `${zeroFill(date.getUTCDate())} / ${zeroFill(date.getMonth() + 1)} / ${date.getFullYear()} - ${zeroFill(date.getHours())} :  ${zeroFill(date.getMinutes())} : ${zeroFill(date.getSeconds())} `;

    dataText.innerText = dataHora;

}, 1000); 

function backgroundColor(index){

    localStorage.setItem('bgIndex', index); //localStorage transoforma o valor armazenado em string

    console.log(index);
    
    index === 0 ? (body.classList.add('standard'), body.classList.remove('light', 'darker')) : 
    index === 1 ? (body.classList.remove('standard', 'darker'), body.classList.add('light')) :
    (body.classList.remove('standard', 'light'), body.classList.add('darker'));
    
}

window.onload = function(){

    const savedValue = localStorage.getItem('bgIndex'); //retorna uma string
    console.log(savedValue);
    backgroundColor(parseInt(savedValue)); //converte a string em número
}

for(let i = 0; i < buttonColor.length; i++){
    buttonColor[i].addEventListener('click', function(){
        backgroundColor(i);
    });
}