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
    let button = 
    
    if (button.innerText == 'Home + 1') {
        game.homeScore += 1
    }
    if (button.innerText == 'Home + 3') {
        game.homeScore += 3
    }

    if (button.innerText == 'Away + 1') {
        game.awayScore += 1
    }
    if (button.innerText == 'Away + 3') {
        game.awayScore += 3
    }
}