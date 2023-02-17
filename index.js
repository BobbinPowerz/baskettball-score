let hScoreCount = document.getElementById("hscore-text")
let hScore = 0
let gScoreCount = document.getElementById("gscore-text")
let gScore = 0

function homeadd1() {
 hScore += 1 
 hScoreCount.textContent = hScore

}

function homeadd2() {
    hScore += 2 
    hScoreCount.textContent = hScore
}

function homeadd3() {
    hScore += 3 
    hScoreCount.textContent = hScore
}

function gAdd1() {
    gScore += 1 
    gScoreCount.textContent = gScore
   
   }
   
function gAdd2() {
       gScore += 2 
       gScoreCount.textContent = gScore
   }
   
function gAdd3() {
       gScore += 3 
       gScoreCount.textContent = gScore
   }