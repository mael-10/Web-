const form = document.getElementById('form1');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');

function congratulation(){
    alert('Its totally right');
    //recarrega a página automáticamente
    location.reload(); 
}

function regexValidationInput(emailTextTest, nameTextTest){
    const regexEmail = /[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}/;
    const regexName = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/;

    emailTextTest.match(regexEmail) && nameTextTest.match(regexName) ? congratulation() : (alert("There's something wrong with name or email"), location.reload())

    return;
}

const getInput = (emailText, nameText) => {
    if(emailText === null ||  nameText === null) return;
    regexValidationInput(emailText, nameText);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getInput(inputEmail.value, inputName.value)
});