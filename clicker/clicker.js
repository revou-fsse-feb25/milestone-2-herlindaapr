// * Constants
const TIME_LIMIT = 5 * 1000 // * time in milisecond
const COUNTDOWN_START = 4

// * Variables
let score = 0
let finalScore = 0
let isStarted = false
let intervalFunction = null

// * Element
const finalScoreElement = document.getElementById("finalScore")
const infoElement = document.getElementById("info")
const clickButton = document.getElementById("clickButton")
const startButton = document.getElementById('startButton')

function handleStart(){
    // * Kita mulai countdown
    startCountdown()
    startButton.disabled = true
}

function handleClick(){
    updateScore()
}

function startCountdown(){
    clickButton.disabled = true

    let countdown = COUNTDOWN_START
    info.innerHTML = 'READY'

    const onInterval = () => {
        if (countdown == 0){
            startTimer()
            clearInterval(intervalFunction)       
        } else {
            info.innerHTML = countdown
            countdown -= 1
        }
    }

    intervalFunction = setInterval(onInterval, 1000)
}

function startTimer(){
    // * Set button to undisabled
    clickButton.disabled = false

    // * Mulai timer
    setTimeout(calculateFinalScore, TIME_LIMIT)

    // * Ubah state jadi true
    isStarted = true

    // * Set info to show 'Start'
    info.innerHTML = 'START'

    // * Set click button to show 'Click'
    clickButton.classList.toggle('cursor-pointer');
    clickButton.classList.toggle('hover:bg-pink-800');
}

function calculateFinalScore(){
    // * Set final score
    finalScore = score

    // * Reset score
    score = 0

    // * Reset state
    isStarted = false

    // * Render final score di depan
    finalScoreElement.innerHTML = `Your score: ${finalScore}`

    // * Set start button to be enabled
    startButton.disabled = false

    // * Set click button to be disabled
    clickButton.disabled = true
}

function updateScore(){
    // * Increment score by 1
    score += 1
}
