const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");
const date = new Date();
//Anexa a função getDate() à var que está contido dentro da função Date()
const day = date.getDate();
//Adiciona + 1, pois a contagem de month é de 0 até 11.
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
//De 0 à 59;
const minutes = date.getMinutes();
const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;
//Change, propiedade para
dateOptionsSelectElement.addEventListener("change", () => {

});