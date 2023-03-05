const rps ={ r : "http://127.0.0.1:5500/Images/stone.png",p: "http://127.0.0.1:5500/Images/paper.png",s: "http://127.0.0.1:5500/Images/scissor.png"}

var s1 = 0
var s2 = 0

const score1 = document.getElementById("player1-score")
const score2 = document.getElementById("player2-score")


const p1 = document.getElementById("player1-img")
const p2 = document.getElementById("player2-img")

setDisplay = ()=>{
    p1.style.display = 'block'
    p2.style.display = 'block' 
}

refresh = (x) => {
    p2.src = x.src
    let ch = Math.floor(Math.random() * 3);
    if (ch == 0) {
        p1.src = rps.r
    }
    else p1.src = (ch == 1) ? rps.p : rps.s;
}

updateScore = () => {
    if (p1.src == p2.src) {
        score1.innerText = ++s1
        score2.innerText = ++s2
    }
    else if (p2.src == rps.r && p1.src == rps.s || p2.src == rps.p && p1.src == rps.r || p2.src == rps.s && p1.src == rps.p) {
        score2.innerText = ++s2
        score1.innerText = s1
    }
    else {
        score1.innerText = ++s1
        score2.innerText = s2
    }
   
}


choice = (x) => {
    if (!s1 && !s2) { setDisplay();}
    refresh(x)
    updateScore()
}
