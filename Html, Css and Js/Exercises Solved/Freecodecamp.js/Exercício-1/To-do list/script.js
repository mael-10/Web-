// Seleciona o elemento para mostrar data e hora
const datetimeDisplay = document.getElementById('datetime');
// Seleciona os botões de cor
const colorButtons = document.querySelectorAll('.flexrow-container div');
// Seleciona o body da página
const pageBody = document.querySelector('body');
// Seleciona botão de adicionar tarefa
const addTaskButton = document.querySelector('.todo-btn');
// Seleciona o campo de input para tarefa
const taskInputField = document.querySelector('.todo-input');
// Seleciona a lista de tarefas
const taskList = document.querySelector('.todo-list');

// Variáveis de controle
let taskCompletionButton = undefined;
let selectedColorIndex = 0;
let taskCounter = 0;
let allTasks = [];

// Função para preencher zeros à esquerda
const padZero = n => {
    return ('0' + n).slice(-2);
}

// Atualiza a data e hora a cada segundo
const updateDatetimeInterval = setInterval(() => {
    const currentDate = new Date();
    const formattedDatetime = `${padZero(currentDate.getUTCDate())} / ${padZero(currentDate.getMonth() + 1)} / ${currentDate.getFullYear()} - ${padZero(currentDate.getHours())} : ${padZero(currentDate.getMinutes())} : ${padZero(currentDate.getSeconds())} `;
    datetimeDisplay.innerText = formattedDatetime;
}, 1000); 

// Função para mudar a cor de fundo
function setBackgroundColor(index) {
    const taskButtons = document.querySelectorAll('.todo');
    localStorage.setItem('bgIndex', index);

    // Classes de estilo de fundo
    const colorClasses = ['standard', 'light', 'darker'];
    pageBody.className = ''; // Reseta classes antigas
    pageBody.classList.add(colorClasses[index]);

    // Verifica se há tarefas para atualizar o estilo
    if (taskButtons !== null && taskButtons !== NaN) {
        taskButtons.forEach(button => {
            // Itera sobre cada botão de tarefa, aplicando o estilo correspondente à cor selecionada
            index === 0 ? (button.classList.add('standard-todo'), button.classList.remove('light-todo', 'darker-todo')) :
            index === 1 ? (button.classList.add('light-todo'), button.classList.remove('standard-todo', 'darker-todo')) :
            (button.classList.add('darker-todo'), button.classList.remove('standard-todo', 'light-todo'));
        });
    }
}

// Função para ordenar tarefas em ordem alfabética
function sortTasksAlphabetically() {
    allTasks.sort((a, b) => a.text.localeCompare(b.text));
}

// Função para colocar a primeira letra da tarefa em maiúsculo
function capitalizeFirstLetter(text) {
    const formattedText = text.charAt(0).toUpperCase() + text.slice(1);
    allTasks[allTasks.length - 1].text = formattedText;
}

// Função para verificar se o input possui espaços ou caracteres especiais no início
function validateTaskInput(taskText) {
    // Verifica se o primeiro caractere é um espaço ou caractere especial
    if (/^\s|[^\w\s]/.test(taskText)) {
        alert('No special characters at the beginning of a phrase are allowed');
        return true; // Retorna true se houver espaços ou caracteres especiais
    } else {
        return false; // Caso contrário, retorna false
    }
}

// Verifica se a tarefa é duplicada
function isTaskDuplicate(newTaskText) {
    // Compara as tarefas existentes, ignorando a diferença entre maiúsculas e minúsculas
    return allTasks.some(task => task.text.toLowerCase() === newTaskText.toLowerCase());
}

// Função para deletar tarefa
function deleteTask(taskButton) {
    allTasks.forEach((task, index) => {
        const taskText = task.text;
        // Encontra a tarefa correspondente e a remove do array allTasks
        if (taskText === taskButton.innerText) {
            allTasks.splice(index, 1); 
        }
    });

    const tasks = document.querySelectorAll('.todo');
    renderTasks();
    syncSavedTasks(tasks);
    initializeTaskButtons();
    saveTasksToLocalStorage();
}

// Valida os botões de tarefas
function initializeTaskButtons() {
    const taskButtons = document.querySelectorAll('.todo');
    
    taskButtons.forEach(task => {
        const completionButton = task.querySelector('.check-btn');

        // Adiciona o evento de clique se ainda não foi adicionado
        if (!completionButton.hasListener) {
            completionButton.addEventListener('click', function() {
                task.classList.toggle('completed'); // Marca/desmarca como completa
                saveTasksToLocalStorage();
            });
            completionButton.hasListener = true;
        } 

        const deleteButton = task.querySelector('.delete-btn');
        // Adiciona o evento de exclusão se ainda não foi adicionado
        if (!deleteButton.hasListener) {
            deleteButton.addEventListener('click', function() {
                deleteTask(task); // Remove a tarefa
                saveTasksToLocalStorage();
            });
            deleteButton.hasListener = true;
        }
    });
}

// Verifica se há tarefas salvas
function syncSavedTasks(savedTasksList) {
    // Se houver tarefas antigas, mantém as existentes
    if (savedTasksList.length !== 0) {
        const newTasksList = document.querySelectorAll('.todo'); 

        newTasksList.forEach((newTask) => {
            const newTaskText = newTask.querySelector('.todo-item');

            savedTasksList.forEach((oldTask, index) => {
                const oldTaskText = oldTask.querySelector('.todo-item');

                // Substitui as tarefas duplicadas com base no texto
                if (newTaskText.innerText === oldTaskText.innerText) { 
                    newTask.replaceWith(savedTasksList[index]);
                }
            });
        });
    }
}

// Função para adicionar uma tarefa à lista
function renderTasks() {
    taskList.innerHTML = '';
    for(i = 0; i < allTasks.length; i++) {
       const task = allTasks[i];
       taskList.innerHTML += ` 
           <div id='btn-${task.id}' class='todo standard-todo'>  
           <li class='todo-item'>${allTasks[i].text}</li>
           <button class='check-btn darker-button' type='button'>
               <i class='fas fa-check'></i>
           </button>
           <button class='delete-btn darker-button' type='button'>
               <i class='fas fa-trash'></i>
           </button>
       </div>`;
    }
}

// Prepara uma nova tarefa e adiciona à lista
function prepareTask(backgroundColorIndex) {
    const tasks = document.querySelectorAll('.todo');
    const taskText = taskInputField.value;

    // Verifica se o texto do input é válido
    if (validateTaskInput(taskText)) {
        taskInputField.value = '';
        return; 
    }

    // Verifica se a tarefa já existe
    if (allTasks !== null && isTaskDuplicate(taskText)) {
        alert('Task already exists! Please enter a new task.');
        taskInputField.value = '';
        return;
    }

    taskCounter++;
    allTasks.push({ id: taskCounter, text: taskText });
    taskInputField.value = '';

    capitalizeFirstLetter(taskText);
    sortTasksAlphabetically();
    renderTasks();
    syncSavedTasks(tasks);
    setBackgroundColor(backgroundColorIndex);
    initializeTaskButtons();
    saveTasksToLocalStorage();
}

// Salva a lista e tarefas no localStorage
function saveTasksToLocalStorage() {
    localStorage.setItem('savedTasksHTML', taskList.innerHTML);
    localStorage.setItem('allTasksData', JSON.stringify(allTasks));
}

// Função para reescrever os botões das tarefas
const loadSavedTasks = (savedTasksHTML) => {
    taskList.innerHTML = savedTasksHTML;
}

// Funções executadas ao carregar a página
window.onload = function() {
    let savedBackgroundColorIndex = localStorage.getItem('bgIndex');
    // Converte o valor salvo para inteiro e aplica a cor de fundo
    setBackgroundColor(parseInt(savedBackgroundColorIndex));

    savedTasksHTML = localStorage.getItem('savedTasksHTML');
    // Reescreve os botões das tarefas salvas
    loadSavedTasks(savedTasksHTML);
    initializeTaskButtons();

    // Se houver tarefas salvas, carrega-as
    if (JSON.parse(localStorage.getItem('allTasksData')) !== null) {
        allTasks = JSON.parse(localStorage.getItem('allTasksData'));
    }
}

// Evento de clique no botão de adicionar tarefa
addTaskButton.addEventListener('click', function(e) {
    e.preventDefault();
    prepareTask(parseInt(localStorage.getItem('bgIndex')));
});

// Evento de clique nos botões de cor
for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener('click', function() {
        setBackgroundColor(i);
    }); 
}

// Define a cor inicial de fundo
setBackgroundColor(0); 