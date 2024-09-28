const dataText = document.getElementById("datetime");
const button1 = document.querySelector('.standard-theme');
const button2 = document.querySelector('.light-theme');
const button3 = document.querySelector('.darker-theme');

const zeroFill = n => {
    return ('0' + n).slice(-2); //Adiciona 0 no começo do número e corta os dois digitos finais
}

const interval = setInterval(() => { //Essa função recebe dois parametros
    const date = new Date();

    const dataHora = `${zeroFill(date.getUTCDate())} / ${zeroFill(date.getMonth() + 1)} / ${date.getFullYear()}  ${zeroFill(date.getHours())} :  ${zeroFill(date.getMinutes())} : ${zeroFill(date.getSeconds())} `;

    dataText.innerText = dataHora;

}, 1000);  