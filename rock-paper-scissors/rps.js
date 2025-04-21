// variable
let result = document.getElementById('result')


function playGame() {
    let computerChoice = ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)]
    let playerChoice = document.getElementById('playerChoice').value
    let showPlayerChoice = document.getElementById('showPlayerChoice')
    let showComputerChoice = document.getElementById('showComputerChoice')

    showPlayerChoice.innerHTML = "You chose: " + playerChoice;
    showComputerChoice.innerHTML = "Computer chose: " + computerChoice;

    if (playerChoice === computerChoice) {
        result.innerHTML = "It's a tie!";

    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        result.innerHTML = "You win!";

    } else {
        result.innerHTML = "You lose!";
    }
}