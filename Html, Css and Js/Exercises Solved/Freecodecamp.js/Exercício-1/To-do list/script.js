const dataText = document.getElementById('datetime'); 
const buttonColor = document.querySelectorAll('.flexrow-container div');
const body = document.querySelector('body');
const todBtn = document.querySelector('.todo-btn');
const todoInput = document.querySelector('.todo-input');
const listTask = document.querySelector('.todo-list');
let checkBtn = '';
let numberButton = 0;
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
    const buttonTodo = document.querySelector('.todo');
    localStorage.setItem('bgIndex', index); //localStorage transoforma o valor armazenado em string

    index === 0 ? (body.classList.add('standard'), body.classList.remove('light', 'darker')) : 
    index === 1 ? (body.classList.remove('standard', 'darker'), body.classList.add('light')) :
    (body.classList.add('darker'), body.classList.remove('standard', 'light'));

    if(buttonTodo !== null && buttonTodo !== NaN){
        index === 0 ? (buttonTodo.classList.add('standard-todo'), buttonTodo.classList.remove('light-todo', 'darker-todo')) :
        index === 1 ? (buttonTodo.classList.add('light-todo'), buttonTodo.classList.remove('standard-todo', 'darker-todo')) :
        (buttonTodo.classList.add('darker-todo'), buttonTodo.classList.remove('standard-todo', 'light-todo'));

    } //simplificar
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

function UpperCase(TextTodoUpperCase){

    const letterUper = TextTodoUpperCase.slice(0,1).toUpperCase();
    const concatenation = letterUper + TextTodoUpperCase.slice(1,);

    allTask[allTask.length - 1].textInput = concatenation;
}

function verifyInput(verifyTextTodo){


    if(verifyTextTodo[0] === ' ' || /^[\*\+\-\{\}\`\´\(\)\=\_\[\]\º\°\ª\§\¨\;\:]/.test(verifyTextTodo)){ //Verifica se no primerio charactere é um espaço em branco ou tem carateres especiais
        alert('Isnt possible special characters at biginning of a phrase');
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

    UpperCase(textTodo); //Colocar o primeiro nome em letra maiúscula
    alphabeticalOrder(allTask); //Colocar em ordem alfabética os objeto
    listTask.innerText = ''; //retira o antigo

    //be continues...

    for(let i = 0; i < allTask.length; i++){
        listTask.insertAdjacentHTML('beforeend', 
            `<div class='todo standard-todo'>  
                <li class='todo-item'>${allTask[i].textInput}</li>
                <button class='check-btn darker-button' type='submit'>
                    <i class='fas fa-check'></i>
                </button>
                <button class='delete-btn darker-button' type='submit'>
                    <i class='fas fa-trash'></i>
                </button>
            </div>`
        );
    }

    checkBtn = document.querySelector('.check-btn');

    checkBtn.addEventListener('click', function(){
        const buttonTodo = document.querySelector('.todo');
        buttonTodo.classList.toggle('completed');
    })
}

window.onload = function(){

    const savedValue = localStorage.getItem('bgIndex'); //retorna uma string
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
