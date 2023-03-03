const rps = ["./Images/stone.png", "./Images/paper.png", "./Images/scissor.png"]
let r = rps[0]
let p = rps[1]
let s = rps[2]

var s1 = 0
var s2 = 0

let score1 = document.getElementById("player1-score")
let score2 = document.getElementById("player2-score")


let playerDisplay1 = document.getElementById("player2-img")
let playerDisplay2 = document.getElementById("player1-img")

setDisplay = ()=>{
    playerDisplay1.style.display = 'block'
    playerDisplay2.style.display = 'block' 
}

refresh = (x) => {
    playerDisplay1.src = x.src
    let ch = Math.floor(Math.random()*3);
    playerDisplay2.src = rps[ch]
}
p1 = playerDisplay1
p2 = playerDisplay2

updateScore = () => {
    if (playerDisplay1.src == playerDisplay2.src) {
        score1.innerText = ++s1
        score2.innerText = ++s2
    }
    else if (p2 == r && p1 == s || p2 == p && p1 == r || p2 == s && p1 == p) {
        score1.innerText = ++s1
        score2.innerText = s2
    }
    else {
        score2.innerText = ++s2
        score1.innerText = s1
    }
   
}


choice = (x) => {
    setDisplay()
    refresh(x)
    updateScore()
}
