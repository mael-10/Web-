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
    return str.match(regex);

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
    const targetId = "#" + entryDropdown.value; // To access the values of options
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`); //The value of a input
    /*

    */
}