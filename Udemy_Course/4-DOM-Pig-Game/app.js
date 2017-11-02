/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/



//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

/*
function btn() {
    //Do something here
}

document.querySelector('.btn-roll').addEventListener('click', btn)
*/

var scores, roundScore, activePlayer, gamePlaying, sixRoll1, sixRoll2;

init();

//Anonymous function
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        
        //1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //2. Display result
        var diceDOM1 = document.getElementById('dice-1');
        diceDOM1.style.display = 'block';
        diceDOM1.src = 'dice-' + dice1 + '.png';
        
        var diceDOM2 = document.getElementById('dice-2'); 
        diceDOM2.style.display = 'block';
        diceDOM2.src = 'dice-' + dice2 + '.png';
        
        //If roll = 6 and previous roll was also 6, than lose entire score and next player's turn
        if ((dice1 === 6 || dice2 === 6) && (sixRoll1 || sixRoll2))  {
            document.getElementById('score-' + activePlayer).textContent = '0';
            document.getElementById('current-' + activePlayer).textContent = '0';
            console.log('Player ' + (activePlayer + 1) + ' loses his ENTIRE score!');
        
            nextPlayer();
            
        //3. Update the round score IF the rolled number was NOT a 1
        } else if (dice1 > 1 & dice2 > 1) {

            //Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

            //If roll = 6, than set sixRoll to true
            dice1 === 6 ? sixRoll1 = true : sixRoll1 = false;
            dice2 === 6 ? sixRoll2 = true : sixRoll2 = false;
        } else {
            //Next player's turn
            nextPlayer();
        }    
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
    
        //Add current score to global score
        scores[activePlayer] += roundScore;

        //Update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        var maxScore = document.getElementById('max-score').value;
        
        //Check if player won the game
        if (scores[activePlayer] >= maxScore) {
            //Declare winnner
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            
            gamePlaying = false;
        } else {
            //Next player's turn
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    //Next player's turn
    //Ternary operator and more specific: conditional operator
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    sixRoll1 = false;
    sixRoll2 = false;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;

    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


























