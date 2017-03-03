// global variables //
var newGameBtn = document.getElementById('js-newGameButton');
pickRock = document.getElementById('js-playerPick_rock');
pickPaper = document.getElementById('js-playerPick_paper');
pickScissors = document.getElementById('js-playerPick_scissors');
newGameElem = document.getElementById('js-newGameElement');
pickElem = document.getElementById('js-playerPickElement');
resultsElem = document.getElementById('js-resultsTableElement');
playerPickElem = document.getElementById('js-playerPick');
computerPickElem = document.getElementById('js-computerPick');
playerResultElem = document.getElementById('js-playerResult');
computerResultElem = document.getElementById('js-computerResult');
playerPointsElem = document.getElementById('js-playerPoints');
playerNameElem = document.getElementById('js-playerName');
computerPointsElem = document.getElementById('js-computerPoints');

// events //

newGameBtn.addEventListener('click', newGame);
pickRock.addEventListener('click', function() {
    playerPick('rock')
});
pickPaper.addEventListener('click', function() {
    playerPick('paper')
});
pickScissors.addEventListener('click', function() {
    playerPick('scissors')
});

var gameState = 'notStarted', //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

// functions //

function setGameElements() {
    switch (gameState) {
        case 'started':
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
            break;
        case 'ended':
            newGameBtn.innerText = 'Jeszcze raz';
        case 'notStarted':
        default:
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'none';
    }
}

setGameElements();

function newGame() {
    player.name = prompt('Wpisz swoje imię', 'imię gracza');
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

        playerNameElem.innerHTML = player.name;
        setGamePoints();
    }

}

function playerPick(playerPick) {
    console.log(playerPick);
}

var x = Math.random();

Math.floor(Math.random() * 3)

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random() * 3)];
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}

function checkRoundAndGameWinner(playerPick, computerPick) {

    checkGamewinner();
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';


    var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone';
        setDraw(); // remis
    } else if (
        (computerPick == 'rock' && playerPick == 'scissors') ||
        (computerPick == 'scissors' && playerPick == 'paper') ||
        (computerPick == 'paper' && playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Wygrana!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Wygrana!";
        computer.score++;
    }

    setGamePoints();


}

function setDraw() {
    playerResultElem.innerHTML = computerResultElem.innerHTML = 'Remis';
}

function checkGamewinner() {
    if (player.score === 10) {
        alert('Koniec gry! Zwycięża ' + player.name);
        endGame();
    }

    if (computer.score === 10) {
        alert('Koniec gry! Zwycięża komputer.');
        endGame();
    }
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundAndGameWinner(playerPick, computerPick);
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function resetGame() {
    gameState = 'notStarted';
    setGameElements();
}

function newNextGame() {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
    setGamePoints();
}

function endGame() {
    if (confirm("Nowa gra?")) {
        newNextGame();
    } else {
        resetGame();
    }
}
