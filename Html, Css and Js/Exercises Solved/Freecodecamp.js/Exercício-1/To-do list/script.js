const dataText = document.getElementById('datetime'); 
const buttonColor = document.querySelectorAll('.flexrow-container div');
const body = document.querySelector('body');
const todoBtn = document.querySelector('.todo-btn');
const todoInput = document.querySelector('.todo-input');
const listTask = document.querySelector('.todo-list');
let checkBtn = undefined;
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
    const buttonTodo = document.querySelectorAll('.todo');
    localStorage.setItem('bgIndex', index); //localStorage transoforma o valor armazenado em string

    const classes = ['standard', 'light', 'darker'];
    body.className = '';  // Reseta classes anteriores (limpa todas as classes)
    body.classList.add(classes[index]);

    if(buttonTodo !== null && buttonTodo !== NaN){ //verifica se existe botão antes de ser implementado as mudanças

        buttonTodo.forEach(btn => {
            index === 0 ? (btn.classList.add('standard-todo'), btn.classList.remove('light-todo', 'darker-todo')) :
            index === 1 ? (btn.classList.add('light-todo'), btn.classList.remove('standard-todo', 'darker-todo')) :
            (btn.classList.add('darker-todo'), btn.classList.remove('standard-todo', 'light-todo'));
        });
    }
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

function UpperCase(text){
    
    const concatenation = text.charAt(0).toUpperCase() + text.slice(1,);
    allTask[allTask.length - 1].textInput = concatenation;
}

function verifyInput(verifyTextTodo){

    if(verifyTextTodo[0] === ' ' || /^\s|[^\w\s]/.test(verifyTextTodo)){ //Verifica se no primerio charactere é um espaço em branco ou tem carateres especiais (IMPLEMENTADO)
        alert('Isnt possible special characters at biginning of a phrase');
        return true;

    } else {
        return false;

    }
}

function isDuplicateTask(newTaskText) {
    // Verifica se já existe uma tarefa com o mesmo texto (ignorando maiúsculas e minúsculas)
    return allTask.some(task => task.textInput.toLowerCase() === newTaskText.toLowerCase());
}

function deleteTask(btnForDelete){


    const ArrayIndex = parseInt(btnForDelete.id.slice(4) - 1)
    console.log(ArrayIndex)
    allTask.splice(ArrayIndex, 1);

    console.log(allTask);

}

function validateBtn() {

    //Valida o botão check
    const buttonTodo = document.querySelectorAll('.todo');
    
    buttonTodo.forEach(check => {

        const checkBtn = check.querySelector('.check-btn');

        // Verifica se o listener já foi adicionado
        if(!checkBtn.hasListener){
            checkBtn.addEventListener('click', function() {
                check.classList.toggle('completed');
                saveButtonsTask(); //atualiza o localStore
            });

            checkBtn.hasListener = true;
        } 

        //adiciona eventos ao delete

        const Btndelete = check.querySelector('.delete-btn');

        if(!Btndelete.hasListener){
            Btndelete.addEventListener('click', function() {
                deleteTask(check);
                saveButtonsTask(); //atualiza o localStore
            });

            checkBtn.hasListener = true;
        }
    });
}

function savedValidate(oldTaskList) {
    if (oldTaskList.length !== 0) { // verifica se existe valores no array
        const newTaskList = document.querySelectorAll('.todo'); 

        newTaskList.forEach((newTask, indexE) => {
            const newCharTask = newTask.querySelector('.todo-item');

            oldTaskList.forEach((oldTask, indexI) => {
                const oldCharTask = oldTask.querySelector('.todo-item');

                if (newCharTask.innerText === oldCharTask.innerText) { 
                    // Substituir o nó inteiro da nova lista pelo da lista antiga
                    newTask.replaceWith(oldTaskList[indexI]);
                }
            });
        });

    }
}

function addTask(){

    listTask.innerHTML = '';

    for(i = 0; i < allTask.length; i++){
       const task = allTask[i];

        listTask.innerHTML += ` 
            <div id='btn-${task.id}' class='todo standard-todo'>  
            <li class='todo-item'>${allTask[i].textInput}</li>
            <button class='check-btn darker-button' type='button'>
                <i class='fas fa-check'></i>
            </button>
            <button class='delete-btn darker-button' type='button'>
                <i class='fas fa-trash'></i>
            </button>
        </div>`
    }
}

function preperTask(bgIndex){

    const task = document.querySelectorAll('.todo');
    const textTodo = todoInput.value;

    if(verifyInput(textTodo)){
        todoInput.value = '';
        return; 
    }

    if(allTask !== null){ //verfica primeiro se há valor no alltask{
        if (isDuplicateTask(textTodo)) {
            alert('Task already exists! Please enter a new task.');
            todoInput.value = '';
            return;
        }
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
    addTask(); //adiciona a tarefa
    savedValidate(task); //salva o valor do check
    backgroundColor(bgIndex); // Muda todo o background colocar das cores
    validateBtn(); //Valida o botão the check
    saveButtonsTask();

}

function saveButtonsTask(){
    localStorage.setItem('btnRefresh', listTask.innerHTML); //Vai pegar a última atualização do btn
    localStorage.setItem('saveAllTask', JSON.stringify(allTask)); //JSON.stringfy serve para salvar arrays no localStorage
}

//função para reescrever os botões
const rewriteBtn = (btns) => {
    listTask.innerHTML = btns;
}

window.onload = function(){

    let savedValue = localStorage.getItem('bgIndex'); //retorna uma string
    backgroundColor(parseInt(savedValue)); //converte a string em número

    // savedValue = localStorage.getItem('btnRefresh');
    // rewriteBtn(savedValue);
    // validateBtn(); //Para fazer a validaçãod os botões

    // if(JSON.parse(localStorage.getItem('saveAllTask')) !== null){ //verifica se o primeira vez a carregar tem o valor null
    //     allTask = JSON.parse(localStorage.getItem('saveAllTask')); //serve para transformar a string em array novamente
    // }
}

todoBtn.addEventListener('click', function(e){
    
    e.preventDefault();
    preperTask(parseInt(localStorage.getItem('bgIndex')));
})

for(let i = 0; i < buttonColor.length; i++){
    buttonColor[i].addEventListener('click', function(){
        backgroundColor(i);
    }); 
}

backgroundColor(0);