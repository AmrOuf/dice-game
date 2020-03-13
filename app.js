// console.log(document.querySelector('.btn-roll'));
document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', handleRoll);
document.querySelector('.btn-hold').addEventListener('click', handleHold);
document.querySelector('.btn-new').addEventListener('click', handleNew);


// var player0CurrentScore = 0;
var activeCurrentScore = 0;
var player0TotalScore = 0;
var player1TotalScore = 0;
var currentPlayer = 0;
var winningScore = 20;

function handleRoll() {
    document.querySelector('.dice').style.display = 'block';

    var diceRoll = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').src = 'dice-' + diceRoll + '.jpg';

    if (diceRoll == 1) {
        handleOne();
        // changePlayer();
    }

    else {
        activeCurrentScore += diceRoll;
        document.querySelector('.active .player-current-score').textContent = activeCurrentScore;
    }

}

function handleHold() {

    if (currentPlayer == 0) {
        player0TotalScore += activeCurrentScore;
        document.querySelector('.active .player-score').textContent = player0TotalScore;
        activeCurrentScore = 0;
        document.querySelector('.active .player-current-score').textContent = activeCurrentScore;
        if (player0TotalScore >= winningScore) {
            // document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('winner');
            document.querySelector('#name-0').textContent = 'WINNER';
            document.querySelector('.btn-roll').disabled = true;
            return;
        }
    }


    else {
        player1TotalScore += activeCurrentScore;
        document.querySelector('.active .player-score').textContent = player1TotalScore;
        activeCurrentScore = 0;
        document.querySelector('.active .player-current-score').textContent = activeCurrentScore;
        if (player1TotalScore >= winningScore) {
            // document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('winner');
            document.querySelector('#name-1').textContent = 'WINNER';
            document.querySelector('.btn-roll').disabled = true;
            return;
        }
    }

    changePlayer();

    if (currentPlayer == 0)
        currentPlayer = 1;
    else
        currentPlayer = 0;
}

function handleNew() {

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.dice').style.display = 'none';

    document.querySelector('#name-0').textContent = 'PLAYER 1';
    document.querySelector('#name-1').textContent = 'PLAYER 2';

    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.btn-roll').disabled = false;

    activeCurrentScore = 0;
    player0TotalScore = 0;
    player1TotalScore = 0;
    currentPlayer = 0;

    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
}


function handleOne() {
    activeCurrentScore = 0;
    document.querySelector('.active .player-current-score').textContent = activeCurrentScore;

    changePlayer();

    if (currentPlayer == 0)
        currentPlayer = 1;
    else
        currentPlayer = 0;
}

function changePlayer() {
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}