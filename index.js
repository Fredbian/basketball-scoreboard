const home = document.getElementById('home-score')
const guest = document.getElementById('guest-score')
const homeBtn1 = document.getElementById('home-btn1')
const homeBtn2 = document.getElementById('home-btn2')
const homeBtn3 = document.getElementById('home-btn3')
const guestBtn1 = document.getElementById('guest-btn1')
const guestBtn2 = document.getElementById('guest-btn2')
const guestBtn3 = document.getElementById('guest-btn3')
const restartBtn = document.getElementById('restart')

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

function restart() {
    home.textContent = 0
    guest.textContent = 0
}


homeBtn1.addEventListener('click', homeAdd1)
homeBtn2.addEventListener('click', homeAdd2)
homeBtn3.addEventListener('click', homeAdd3)
guestBtn1.addEventListener('click', guestAdd1)
guestBtn2.addEventListener('click', guestAdd2)
guestBtn3.addEventListener('click', guestAdd3)
restartBtn.addEventListener('click', restart)
