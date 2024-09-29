const dataText = document.getElementById('datetime'); 
const buttonColor = document.querySelectorAll('.flexrow-container div');
const body = document.querySelector('body');
const title = document.getElementById('title');
const datatime = document.getElementById('datetime');

const zeroFill = n => {
    return ('0' + n).slice(-2); //Adiciona 0 no começo do número e corta os dois digitos finais
}

const interval = setInterval(() => { //Essa função recebe dois parametros
    const date = new Date();

    const dataHora = `${zeroFill(date.getUTCDate())} / ${zeroFill(date.getMonth() + 1)} / ${date.getFullYear()}  ${zeroFill(date.getHours())} :  ${zeroFill(date.getMinutes())} : ${zeroFill(date.getSeconds())} `;

    dataText.innerText = dataHora;

}, 1000);

function backgroundColor(bgcolor){
    console.log(bgcolor);


    //ternary condition
    bgcolor === 0 ? (body.style.backgroundImage = 'linear-gradient(100deg, #575656, #062e3f)', title.style.color = '#ffffff', datatime.style.color = '#ffffff') :
    bgcolor === 1 ? (body.style.backgroundImage = 'linear-gradient(100deg, #d4f1ff, #ffffff)', title.style.color = '#000000', datatime.style.color = '#000000') :
    (body.style.backgroundImage = 'linear-gradient(100deg, #001214, #001f29)', title.style.color = '#ffffff', datatime.style.color = '#ffffff');

    window.onload = function(){
        
    }

}

for(let i = 0; i < buttonColor.length; i++){
    buttonColor[i].addEventListener('click', function(){
        backgroundColor(i);
    });
}