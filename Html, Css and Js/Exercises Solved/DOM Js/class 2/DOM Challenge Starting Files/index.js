var list = document.querySelector("ul").lastElementChild;
// html --> body --> ul --> last 'li' in 'ul' 


// 'querySelector' select a sepecify tags using css syntax
list.innerHTML = "<em>Ismael</em>";  //Inner html gives you the html and the tags inside it. With it, u can write a tag inside the html

// Query selector selects only once element 

// Query selector select all elements tags with the same name  

var colorSelector = document.getElementsByTagName("li");//Tree variables, because are three items (It's an Array variable)

for (var i = 0; i < colorSelector.length; i++) { //Put the array on Loop where is lower than your length
    
    if (i === 0) { //If is equal 2 is gonna change color (a) to red and gonna apper a pop-up

        document.querySelector(".list > a").style.color = "red"; //Tag a is red
        alert(colorSelector[i].textContent); //Text content to write the variables 
    } else {

        colorSelector[i].style.color = "purple"; 
    }
}

document.getElementsByClassName("btn")[0].style.color = "blue"; //Change the text color of button blue 


const butto = document.getElementById("butte"); 
const box = document.getElementById("textbox"); 

butto.addEventListener("click", function() { //if I click on button, the check-box gonna click too 
    box.click(); 
})

var listItem = document.querySelectorAll("#list > .item"); // Select all elements  (It's an Array)

document.querySelector("button").style.backgroundColor = "yellow";


document.querySelector("h1").classList.add("huge"); // Add a class using Js. (remove and toggle)


//At bellow u can change the attributs like href, scr and so on

var attributte = document.querySelector("a").getAttribute("href"); //It's important to especify the attributs in which case it's "href"
// Inside variable we have the value of atrribut. 

document.querySelector("a").setAttribute("href", "https://mael-10.github.io/Portifolio/"); //Set a new atrributs 