let countH = document.getElementById("score-h")
let countG = document.getElementById("score-g")
let countHome = 0
let countGuest = 0

function sum1() {
    countHome += 1
    countH.textContent = countHome
}
function sum2() {
    countHome += 2
    countH.textContent = countHome
}
function sum3() {
    countHome += 3
    countH.textContent = countHome
}
function sum1g() {
    countGuest += 1
    countG.textContent = countGuest
}
function sum2g() {
    countGuest += 2
    countG.textContent = countGuest
}
function sum3g() {
    countGuest += 3
    countG.textContent = countGuest
}

function reset () {
    countHome = 0
    countGuest = 0
    countH.textContent = 0
    countG.textContent = 0
}
