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
//Change, propiedade para quandomudar o select
dateOptionsSelectElement.addEventListener("change", () => {
    switch(dateOptionsSelectElement.value){
        case 'yyyy-mm-dd': 
            //Toda vez que tem uma "-" é separado por array
            currentDateParagraph.textContent = formattedDate.split("-").reverse().join("-");
            console.log(currentDateParagraph.textContent);
            break;
        case 'dd-mm-yyyy':
            currentDateParagraph.textContent = formattedDate;
            break;
        case 'mm-dd-yyyy-h-mm':
            currentDateParagraph.textContent = `${month}-${day}-${year}-${hours}-${minutes}`;
            break;

    }
});