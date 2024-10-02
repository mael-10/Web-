const dataText = document.getElementById('datetime'); 
const buttonColor = document.querySelectorAll('.flexrow-container div');
const body = document.querySelector('body');
const todBtn = document.querySelector('.todo-btn');
const todoInput = document.querySelector('.todo-input');
let taskCounter = 0;
let allTask = [];

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

function alphabeticalOrder(){
    allTask.sort((a, b) => {
        if(a.textInput < b.textInput){
            return -1;
        }

        if(a.textInput > b.textInput){
            return 1;
        }

        return 0;
    });
    
}

function verifyInput(verifyTextTodo){

    console.log(verifyTextTodo);

    if(verifyTextTodo === '' || /^[\*\+\-\{\}\`\´\]]/.test(verifyTextTodo)){
        alert('Isnt possible special characters at bigining of a phrase');
        return true;

    } else {
        return false;

    }
}

function addTask(bgIndex){

    const textTodo = todoInput.value;

    if(verifyInput(textTodo)){
        todoInput.value = '';
        return 
    } 

    taskCounter++;
    allTask.push(
        {
            id: taskCounter,
            textInput: `${textTodo}`
        }
    );

    todoInput.value = '';
    alphabeticalOrder(allTask); //Colocar em ordem alfabética os objetos
    console.log(allTask);

}

window.onload = function(){

    const savedValue = localStorage.getItem('bgIndex'); //retorna uma string
    console.log(savedValue);
    backgroundColor(parseInt(savedValue)); //converte a string em número
}

todBtn.addEventListener('click', function(e){
    e.preventDefault();
    addTask(localStorage.getItem('bgIndex'));
})

for(let i = 0; i < buttonColor.length; i++){
    buttonColor[i].addEventListener('click', function(){
        backgroundColor(i);
    });
}