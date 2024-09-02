
let playerScore = 0;
let computerScore = 0;

function getRandomComputerResult(){

    const options = ["Rock","Paper","Scissors"];
    const randomNumber = Math.floor(Math.random() * options.length);

    return options[randomNumber];
}

function hasPlayerWonTheRound(player, computer) {

    return (
        (player === "Rock" && computer === "Scissors") || 
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    );
  }

function getRoundResults(userOption){

    const computerResult = getRandomComputerResult();
    const playerResult = hasPlayerWonTheRound(userOption, computerResult);

    if(playerResult === true){
        playerScore++;
        return `Player wins! ${userOption} beats ${computerResult}`;

    } else if(playerResult === false){
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`;

    } else if(userOption === computerResult){
        return `It's a tie! Both chose ${userOption}`;

    }
}

function showResults(userOption) {
    const roundResultsMsg = document.getElementById('results-msg');
    const playerScoreSpanElement = document.getElementById('player-score');
    const computerScoreSpanElement = document.getElementById('computer-score');

    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    roundResultsMsg.innerText = getRoundResults(userOption);
    

}; 





showResults("Rock");