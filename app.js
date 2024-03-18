const game =
{
    homeScore: 0,
    awayScore: 0,
}

let home = document.getElementById('homeTeam')
let away = document.getElementById('awayTeam')

// drawScore()

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

function increaseScore() {

}