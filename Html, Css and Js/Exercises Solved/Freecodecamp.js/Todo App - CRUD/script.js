//Formulário para manipulação de task
const taskForm = document.getElementById("task-form");
//Parte do HTML do Unsaved Changes
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
//Botão para adicionar uma nova tarefa
const openTaskFormBtn = document.getElementById("open-task-form-btn");
//Botão de Cancelar ao adicinar uma task
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
//Botão para adicionar uma task
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
//Botão de cancelar no "Unsaved Changes"
const cancelBtn = document.getElementById("cancel-btn");
//Botão de Discartar no "Unsaved Changes"
const discardBtn = document.getElementById("discard-btn");
//Div container
const tasksContainer = document.getElementById("tasks-container");
//Campos input para o formulário
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");
//taskData terá as informações armazenadas no array e que pode ser usadas no localStorage, pode ser usado para mostrar na tela
const taskData = [];
let currentTask = {};
openTaskFormBtn.addEventListener('click', ()=>{
    taskForm.classList.toggle("hidden");
})