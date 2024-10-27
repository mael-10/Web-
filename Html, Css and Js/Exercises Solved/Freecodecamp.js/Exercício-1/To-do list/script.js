// Elementos principais
const datetimeDisplay = document.getElementById('datetime');
const colorButtons = document.querySelectorAll('.flexrow-container div');
const pageBody = document.querySelector('body');
const addTaskButton = document.querySelector('.todo-btn');
const taskInputField = document.querySelector('.todo-input');
const taskList = document.querySelector('.todo-list');

// Variáveis de controle
let taskCounter = 0;
let allTasks = [];

// Exibição de data e hora
setInterval(() => {
    const currentDate = new Date();
    datetimeDisplay.innerText = `${padZero(currentDate.getDate())} / ${padZero(currentDate.getMonth() + 1)} / ${currentDate.getFullYear()} - ${padZero(currentDate.getHours())} : ${padZero(currentDate.getMinutes())} : ${padZero(currentDate.getSeconds())}`;
}, 1000);

function padZero(n) {
    return ('0' + n).slice(-2);
}

// Manipulação da cor de fundo e estilo das tarefas
function setBackgroundColor(index) {
    localStorage.setItem('bgIndex', index);
    const colorClasses = ['standard', 'light', 'darker'];
    pageBody.className = '';
    pageBody.classList.add(colorClasses[index]);
    updateTaskButtonColors(index);
}

function updateTaskButtonColors(index) {
    const taskButtons = document.querySelectorAll('.todo');
    taskButtons.forEach(button => {
        button.classList.remove('standard-todo', 'light-todo', 'darker-todo');
        button.classList.add(index === 0 ? 'standard-todo' : index === 1 ? 'light-todo' : 'darker-todo');
    });
}

// Funções de manipulação de tarefas
function addTask(taskText) {
    if (!taskText || validateTaskInput(taskText) || isTaskDuplicate(taskText)) return;

    taskCounter++;
    const formattedText = capitalizeFirstLetter(taskText);
    allTasks.push({ id: taskCounter, text: formattedText, completed: false });
    saveTasksToLocalStorage();
    renderTasks();
}

function deleteTask(taskButton) {
    allTasks = allTasks.filter(task => task.text !== taskButton.innerText);
    saveTasksToLocalStorage();
    renderTasks();
}

function toggleTaskCompletion(taskId) {
    const task = allTasks.find(task => task.id === taskId);
    if (task) {
        task.completed = !task.completed;
        saveTasksToLocalStorage();
        renderTasks();
    }
}

// Funções utilitárias de validação e formatação
function validateTaskInput(taskText) {
    if (/^\s|[^\w\s]/.test(taskText)) {
        alert('No special characters at the beginning of a phrase are allowed');
        return true;
    }
    return false;
}

function isTaskDuplicate(newTaskText) {
    return allTasks.some(task => task.text.toLowerCase() === newTaskText.toLowerCase());
}

function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

// Renderização de tarefas e inicialização dos botões de controle
function renderTasks() {
    taskList.innerHTML = '';
    allTasks.forEach(task => {
       taskList.innerHTML += `
           <div id='btn-${task.id}' class='todo ${getBackgroundClass()} ${task.completed ? 'completed' : ''}'>
               <li class='todo-item'>${task.text}</li>
               <button class='check-btn darker-button' type='button'><i class='fas fa-check'></i></button>
               <button class='delete-btn darker-button' type='button'><i class='fas fa-trash'></i></button>
           </div>`;
    });
    initializeTaskButtons();
}

function getBackgroundClass() {
    const backgroundIndex = parseInt(localStorage.getItem('bgIndex') || 0);
    return backgroundIndex === 0 ? 'standard-todo' : backgroundIndex === 1 ? 'light-todo' : 'darker-todo';
}

function initializeTaskButtons() {
    const taskButtons = document.querySelectorAll('.todo');
    taskButtons.forEach(task => {
        const taskId = parseInt(task.id.split('-')[1]);
        const completionButton = task.querySelector('.check-btn');
        const deleteButton = task.querySelector('.delete-btn');

        if (!completionButton.hasListener) {
            completionButton.addEventListener('click', () => toggleTaskCompletion(taskId));
            completionButton.hasListener = true;
        }

        if (!deleteButton.hasListener) {
            deleteButton.addEventListener('click', () => deleteTask(task));
            deleteButton.hasListener = true;
        }
    });
}

// Funções de armazenamento e carregamento
function saveTasksToLocalStorage() {
    localStorage.setItem('allTasksData', JSON.stringify(allTasks));
}

function loadTasksFromLocalStorage() {
    const savedTasks = JSON.parse(localStorage.getItem('allTasksData')) || [];
    allTasks = savedTasks;
    renderTasks();
}

// Eventos principais
addTaskButton.addEventListener('click', function(e) {
    e.preventDefault();
    addTask(taskInputField.value);
    taskInputField.value = '';
});

colorButtons.forEach((button, index) => {
    button.addEventListener('click', () => setBackgroundColor(index));
});

// Carregar tarefas e aplicar estilos ao carregar a página
window.onload = function() {
    const savedBackgroundColorIndex = parseInt(localStorage.getItem('bgIndex') || 0);
    setBackgroundColor(savedBackgroundColorIndex);
    loadTasksFromLocalStorage();
};