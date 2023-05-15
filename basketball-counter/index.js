//HOME COUNT

let homeCount = 0
let changeHomeCount = document.getElementById("home-count")

function countPlusOneHome(){
    homeCount += 1
    changeHomeCount.textContent = homeCount
}

function countPlusTwoHome(){
    homeCount += 2
    changeHomeCount.textContent = homeCount
}

function countPlusThreeHome(){
    homeCount += 3
    changeHomeCount.textContent = homeCount
}

//GUEST COUNT

let guestCount = 0
let changeGuestCount = document.getElementById("guest-count")

function countPlusOneGuest(){
    guestCount += 1
    changeGuestCount.textContent = guestCount
}

function countPlusTwoGuest(){
    guestCount += 2
    changeGuestCount.textContent = guestCount
}

function countPlusThreeGuest(){
    guestCount += 3
    changeGuestCount.textContent = guestCount
}