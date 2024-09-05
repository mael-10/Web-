
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const roundResultsMsg = document.getElementById('results-msg');
const playerScoreSpanElement = document.getElementById('player-score');
const computerScoreSpanElement = document.getElementById('computer-score');
const winnerMsgElement = document.getElementById('winner-msg');
const optionsContainer = document.querySelector('.options-container');
const resetGameBtn = document.getElementById('reset-game-btn');
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

    roundResultsMsg.innerText = getRoundResults(userOption);
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;

    if(playerScore === 3){
        winnerMsgElement.innerText = "Player has won the game!";
        optionsContainer.style.display = 'none';
        resetGameBtn.style.display = 'block';

    } else if(computerScore === 3){
        winnerMsgElement.innerText = "Player has won the game!";
        optionsContainer.style.display = 'none';
        resetGameBtn.style.display = 'block';

    }
};

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = 0;
    computerScoreSpanElement.innerText = 0; 
    resetGameBtn.style.display = 'none';
    optionsContainer.style.display = 'block';
    winnerMsgElement.innerText = '';
    roundResultsMsg.innerText = '';
    
};


rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});

resetGameBtn.addEventListener("click", function() {
    resetGame();
});