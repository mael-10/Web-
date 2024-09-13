
const buttons = document.querySelectorAll('.button > button');
const number = document.querySelector('.number');

buttons[0].addEventListener('click',  function () {
    let valueNumber = Number(number.innerText);
    console.log(valueNumber)
    valueNumber++;

    number.innerHTML = valueNumber;

});

buttons[1].addEventListener('click',  function () {
    if(number.innerText > 0){
        let valueNumber = number.innerText;
        console.log(valueNumber)
        valueNumber--;

        number.innerHTML = valueNumber;

    } else {
        alert("Não é possível número negativos")
    }

});