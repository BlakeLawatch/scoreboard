
// variables

let home = 0
let away = 0




function homeScore() {
    home += 1
    updateScoreHome()
    finalScore()
}

function homeScoreBig() {
    home += 3
    updateScoreHome()
    finalScore()
}

function awayScore() {
    away += 1
    updateScoreAway()
    finalScore()
}

function awayScoreBig() {
    away += 3
    updateScoreAway()
    finalScore()
}
function homeMinusScore() {
    home -= 1
    updateScoreHome()
    finalScore()
}

function homeMinusScoreBig() {
    home -= 3
    updateScoreHome()
    finalScore()
}

function awayMinusScore() {
    away -= 1
    updateScoreAway()
    finalScore()
}

function awayMinusScoreBig() {
    away -= 3
    updateScoreAway()
    finalScore()
}

function updateScoreHome() {
    const homeElement = document.getElementById('updateHomeScore')
    homeElement.innerText = home
    zeroScore()
}
function updateScoreAway() {
    const awayElement = document.getElementById('updateAwayScore')
    awayElement.innerText = away
    zeroScore()
}

function zeroScore() {
    if (home < 0) {
        home = 0
    } else if (away < 0) {
        away = 0
    }
}

function finalScore() {
    if (home >= 10) {
        window.alert('Home Winner')
        home = 0
        away = 0
    } else if (away >= 10) {
        window.alert('Away Winner')
        home = 0
        away = 0
    }
}
