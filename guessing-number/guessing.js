let secretNumber = Math.floor(Math.random() * 100) + 1
let attempts = 5

// number validation
function checkNumber() {
    if (document.getElementById('guessInput').value > 100) {
        alert("Please enter a number between 1 and 100");
    } else if (document.getElementById('guessInput').value < 1) {
        alert("Please enter a number between 1 and 100");
    } else guessNumber();
}

function guessNumber() {
    // variable
    let userGuess = parseInt(document.getElementById('guessInput').value)
    let showUserGuess = document.getElementById('showUserGuess')
    let showSecretNumber = document.getElementById('showSecretNumber')
    let result = document.getElementById('result2')

    showUserGuess.innerHTML = "Your guess: " + userGuess;

    if (userGuess === secretNumber) {
        result.innerHTML = "You won! You guessed the secret number!";
    } else {
        attempts -= 1
        if (attempts > 0) {
            result.innerHTML = "Wrong guess! You have " + attempts + " attempts left.";
            if (userGuess > secretNumber) {
                result.innerHTML += "<br>Hint: Too High!";
            } else {
                result.innerHTML += "<br>Hint: Too Low!";
            }
        } else {
            result.innerHTML = "Game over! The secret number was: " + secretNumber;
        }
    }
}