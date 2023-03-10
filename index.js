const home = document.getElementById('home-score')
const guest = document.getElementById('guest-score')
const homeBtn1 = document.getElementById('home-btn1')
const homeBtn2 = document.getElementById('home-btn2')
const homeBtn3 = document.getElementById('home-btn3')
const guestBtn1 = document.getElementById('guest-btn1')
const guestBtn2 = document.getElementById('guest-btn2')
const guestBtn3 = document.getElementById('guest-btn3')
const startBtn = document.getElementById('start')
const resetBtn = document.getElementById('reset')
const timeContainer = document.getElementById('timer-container')
const message = document.getElementById('message')
const winMessage = document.getElementById('winMessage')

resetBtn.disabled = true
homeBtn1.disabled = true
homeBtn2.disabled = true
homeBtn3.disabled = true
guestBtn1.disabled = true
guestBtn2.disabled = true
guestBtn3.disabled = true


const startingMinutes = 1
let time = startingMinutes * 60 - 51
const timerEl = document.getElementById('timer')

console.log(time % 60)

function homeAdd1() {
    home.textContent = Number(home.textContent) + 1
}

function homeAdd2() {
    home.textContent = Number(home.textContent) + 2
}

function homeAdd3() {
    home.textContent = Number(home.textContent) + 3
}

function guestAdd1() {
    guest.textContent = Number(guest.textContent) + 1
}

function guestAdd2() {
    guest.textContent = Number(guest.textContent) + 2
}

function guestAdd3() {
    guest.textContent = Number(guest.textContent) + 3
}


function timer() {
    let minutes = Math.floor(time / 60)
    let seconds = time % 60
    // if seconds < 10, add '0' 
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    timerEl.textContent = `${minutes} : ${seconds}`
    time--

    if (time === -1) {
        // timerEl.textContent = `${minutes} : ${seconds}`
        message.textContent = 'GAME OVER'
        clearInterval(countTime)
        startBtn.disabled = true
        homeBtn1.disabled = true
        homeBtn2.disabled = true
        homeBtn3.disabled = true
        guestBtn1.disabled = true
        guestBtn2.disabled = true
        guestBtn3.disabled = true
        if (Number(home.textContent) > Number(guest.textContent)) {
            winMessage.textContent = 'HOME TEAM WIN !!!'
        } else if (Number(home.textContent) < Number(guest.textContent)) {
            winMessage.textContent = 'GUEST TEAM WIN !!!'
        } else {
            winMessage.textContent = 'DRAW !!!'
        }
    }
}

function reset() {
    resetBtn.disabled = true
    startBtn.disabled = false
    homeBtn1.disabled = true
    homeBtn2.disabled = true
    homeBtn3.disabled = true
    guestBtn1.disabled = true
    guestBtn2.disabled = true
    guestBtn3.disabled = true
    clearInterval(countTime)
    home.textContent = 0
    guest.textContent = 0
    time = startingMinutes * 60 - 51
    timerEl.textContent = ''
    message.textContent = 'Game Reset !'
    winMessage.textContent = ''
}

function newGame() {
    startBtn.disabled = true
    resetBtn.disabled = false
    homeBtn1.disabled = false
    homeBtn2.disabled = false
    homeBtn3.disabled = false
    guestBtn1.disabled = false
    guestBtn2.disabled = false
    guestBtn3.disabled = false
    countTime = setInterval(timer, 1000)
    message.textContent = 'Game Start !'
}




homeBtn1.addEventListener('click', homeAdd1)
homeBtn2.addEventListener('click', homeAdd2)
homeBtn3.addEventListener('click', homeAdd3)
guestBtn1.addEventListener('click', guestAdd1)
guestBtn2.addEventListener('click', guestAdd2)
guestBtn3.addEventListener('click', guestAdd3)
startBtn.addEventListener('click', newGame)
resetBtn.addEventListener('click', reset)
