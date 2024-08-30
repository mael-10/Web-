
function getRandomComputerResult(){
    const options = ["Rock","Paper","Scissors"];
    const randomNumber = Math.floor(Math.random() * options.length);

    return options[randomNumber];

}

function hasPlayerWonTheRound(player, computer){

    if(player === "Rock" && computer === "Scissors"){
        return true;

    } else if(player === "Scissors" && computer === "Paper"){
        return true;

    } else if(player === "Paper" && computer === "Rock"){
        return  true;

    } else{
        return false;
    }

}

function getRoundResults(userOption){
    const computerResult = getRandomComputerResult();
    const playerResult = hasPlayerWonTheRound(userOption, computerResult);

    if(playerResult === true){
        document.getElementById('player-score').innerText = 1;
    } else{
        document.getElementById('computer-score').innerText = 1;
    }
}

console.log(getRoundResults("Rock"));
console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);