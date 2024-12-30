const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');

const checkPolindromo = () => {
    const text = textInput.value;
    const textSplit = text.split('');
    const invertText = textSplit.map((x) => {

    });
}

const blanckInput = () => {
    //Se for um falsy value, vai criar um alert
    !textInput.value ? alert("Please input a value") : checkPolindromo();

}

checkBtn.addEventListener('click', () => {
    blanckInput();
});