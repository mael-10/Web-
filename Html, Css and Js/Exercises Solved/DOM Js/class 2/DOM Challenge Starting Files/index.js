var list = document.querySelector("ul").lastElementChild;
// html --> body --> ul --> last 'li' in 'ul' 


// 'querySelector' select a sepecify tags using css syntax
list.innerHTML = "Ismael"; 

// Query selector selects only once element 

// Query selector select all elements tags with the same name  

var colorSelector = document.getElementsByTagName("li");//Tree variables, because are three items (It's an Array variable)

for (var i = 0; i < colorSelector.length; i++) { //Put the array on Loop where is lower than your length
    
    if (i === 0) { //If is equal 2 is gonna change color (a) to red and gonna apper a pop-up

        document.querySelector(".list > a").style.color = "red"; //Tag a is red
        alert(colorSelector[i].textContent);
    } else {

        colorSelector[i].style.color = "purple"; 
    }
}

document.getElementsByClassName("btn")[0].style.color = "blue";

const butto = document.getElementById("butte"); 
const box = document.getElementById("textbox"); 

butto.addEventListener("click", function() { //iIf I click on button, the check-box will click too 
    box.click();
    document.body.backgroundColor = "red"; 
})

var listItem = document.querySelectorAll("#list > .item"); // Select all elements  (It's an Array)

document.querySelector("button").style.backgroundColor = "yellow"; // Change the background color of button yellow  