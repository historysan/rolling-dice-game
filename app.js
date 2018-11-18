let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;
const init = () => {
	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
	document.querySelector('.btn-roll').style.display = 'block';
	document.querySelector('.btn-hold').style.display = 'block';
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

init();

const nextPlayer = () => {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-roll').addEventListener('click', () => {
	const diceOne = Math.floor(Math.random() * 6) + 1;
	const diceTwo = Math.floor(Math.random() * 6) + 1;
	document.getElementById('dice-1').style.display = 'block';
	document.getElementById('dice-2').style.display = 'block';
	document.getElementById('dice-1').src = 'dice-' + diceOne + '.png';
	document.getElementById('dice-2').src = 'dice-' + diceTwo + '.png';
	// if (diceOne === diceTwo) {
	// 	scores[activePlayer] = 0;
	// 	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
	// 	nextPlayer();
	// } else 
	if (diceOne !== 1 && diceTwo !== 1) {
		roundScore += diceOne + diceTwo;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;
	} else {
		nextPlayer();
	}
});

document.querySelector('.btn-hold').addEventListener('click', () => {
	scores[activePlayer] += roundScore;
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
	let winningScore;
	const input = document.querySelector('.final-score').value;
	if (input) {
		winningScore = input;
	} else {
		winningScore = 100;
	}
	if (scores[activePlayer] >= winningScore) {
		document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
		document.getElementById('dice-1').style.display = 'none';
		document.getElementById('dice-2').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		document.querySelector('.btn-roll').style.display = 'none';
		document.querySelector('.btn-hold').style.display = 'none';
	} else {
		nextPlayer();
	}
});

document.querySelector('.btn-new').addEventListener('click', () => {
	scores = [0, 0];
	roundScore = 0;
	activePlayer = 0;
	init();
});