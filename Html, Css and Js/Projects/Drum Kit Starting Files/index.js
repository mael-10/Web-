// document.querySelector("button").addEventListener("click", handClick); //we dont set the parentheses, because with that it's like a trigger

// function handClick() {
//     alert("I got clicked here");
// } 

var numberOfButton = document.querySelectorAll(".drum"); 
 
for (var i = 0; i < numberOfButton.length; i++) {
    numberOfButton[i].addEventListener("click", function () {
        var switchLetter = this.innerHTML;

        switch (switchLetter) {
            case 'w':
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play(); 
                break;

            case 'a': 
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play(); 
                break;

            case 's': 
                var audio = new Audio('sounds/tom-3.mp3'); 
                audio.play(); 
                break;

            case 'd': 
                var audio = new Audio('sounds/tom-4.mp3'); 
                audio.play(); 
                break;
            
            case 'j': 
                var audio = new Audio('sounds/snare.mp3'); 
                audio.play(); 
                break;
            
            case 'k': 
                var audio = new Audio('sounds/crash.mp3'); 
                audio.play(); 
                break;

            case 'l': 
                var audio = new Audio('sounds/kick-bass.mp3'); 
                audio.play(); 
                break;

            default:
                break;
        }
    } 
    );
}  