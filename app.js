const game =
{
    homeScore: 0,
    awayScore: 0,
}

let home = document.getElementById('homeTeam')
let away = document.getElementById('awayTeam')

drawScore()

function resetScore() {
    game.homeScore = 0
    game.awayScore = 0
    console.log('home', game.homeScore)
    console.log('away', game.awayScore)
    drawScore()
}

function drawScore() {
    console.log('home ' + home)
    console.log('away ' + away)
    home.innerText = game.homeScore.toString()
    away.innerText = game.awayScore.toString()
}

function changeScore(team, points) {
    if (team == 'home') {
        game.homeScore += points
    }
    if (team == 'away') {
        game.awayScore += points
    }
    drawScore()
    checkWinner()
}

function checkWinner() {
    if (game.homeScore >= 15) {
        hideInputs()
        window.alert('The Home Team has won! YAY!')
    }
    if (game.awayScore >= 15) {
        hideInputs()
        window.alert('The Away Team has won. BOO!')
    }
}

function hideInputs() {
    let inputSection = document.getElementById('input-section')
    inputSection.classList.add('d-none')
}