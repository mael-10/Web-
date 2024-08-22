//Values from HTML form are recivied as string

const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;


function cleanInputString(str){
    //console.log("original string: ", str); //When we use a comma it preserve the original value of a variable
    const regex = /[+-\s]/g; //Regex is used to form a pattern search for: Searching, Replace and Valided String
    return str.replace(regex, ''); //Replace the regex value
    // console.log("hello".replace(/l/g, "1")); //The second argument is the string that replaces the matched sequence

}

function isInvalidInput(str){
    const regex = /\d+e\d+/i;
    return str.match(regex); //Match return an array even if it is null or not

    /*
        console.log(isInvalidInput("1e3")); (If it doesnt return it'll return null) 
        null in Js is a primitive value that represents the absence of a value
        null is consided falsy
    
        The match method returns an array with any matches found in the string.

        "1e3" is the matched value against the /\d+e\d+/i regex.
        index: 0 is the index of the matched value in the string.
        input: '1e3' is the original string that was matched.
        groups: undefined are the matched groups, which are not used in this case.
    */

}

function addEntry(){
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`); //It verify the actual value selected by user
    /*
        Templates literals is a dynamic format to use string more clear. It help us to concatenate vars and strings more easy in one single row. Ex:
        `Hello. I wanna share something (I somewhat it is) good choice just for u. Is here:
        ${product}`;

        Normal Way: 
        "Hello. I wanna share something (I somewhat it is) good choice just for u. Is here: \n" + product;
        
    */

    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length+1;
    //Query selector will return create a node list of all elements that match the selector
    //Node list is an "array-like object". NodeList is a colection of DOM elements inside an array 
    //You can access it's elements using bracket notation
    const HTMLString = `
        <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
        <input id="${entryDropdown.value}-${entryNumber}-name" type="text" placeholder="Name"/>
        <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
        <input id="${entryDropdown.value}-${entryNumber}-calories" type="number" min="0" placeholder="Calories"/>
    `;

    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString); //Search more about atrribuits
    //insertAjacentHTML...

    //The advenListner executes many functions when you click. If you has two separated addventListner adding an event to the same thing all of two will execute
   
}

function getCaloriesFromInputs(list){ //List will be the result of a query selector, which will return a nodeList. The value of 'list' will consit of inputs elements
    
    let calories = 0;

    for (const item of list) {
        const currVal = cleanInputString(item.value); //To check to clean up the input
        const invalidInputMatch = isInvalidInput(currVal);  //To check if it is a valid number

        if(invalidInputMatch){ //Verify if it hasnt the values: 'undifined', '0', 'NaN', 'false', '""' or "null"
            //But if it has a 'truly' value it is a mandatory true even inside array has a false value
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
        }
    }
}   

addEntryButton.addEventListener('click', addEntry); 