//excercise 1
document.addEventListener('DOMContentLoaded', () => {

	const board = document.getElementById('board');
	const squares = board.querySelectorAll('div');
	squares.forEach(sq => sq.classList.add('square'));
	
	//exercise 2
	let currentPlayer= 'X';
	let state= Array(9).fill('');
	let gameOver= false;

	//exercise 4
	const statusDiv= document.getElementById('status');
	const wins= [
		[0,1,2],[3,4,5],[6,7,8], //rows
		[0,3,6],[1,4,7],[2,5,8], //columns
		[0,4,8],[2,4,6] //diagonals
	];

	function checkWinner() {
		for (const [a, b, c] of wins) {
			if (state[a] && state[a] == state[b] && state[b] == state[c]) {
				return state[a]; //get a 'X' or 'O'
			}
		}
		return null;
	}

	squares.forEach((square, index) => {
		square.addEventListener('click', () => {
			if (gameOver) return;
			if (!state[index]) {
				state[index]= currentPlayer;
				square.textContent= currentPlayer;
				square.classList.add(currentPlayer);

				const winner= checkWinner();
				if (winner) {
					statusDiv.textContent= `Congratulations! ${winner} is the Winner!`;
					statusDiv.classList.add('you-won');
					gameOver= true;
					return;
				}

				currentPlayer= currentPlayer == 'X' ? 'O' : 'X';
			}
		});

		//exercise 3
		square.addEventListener('mouseover', () => square.classList.add('hover'));
		square.addEventListener('mouseout', () => square.classList.remove('hover'));
	});

	//exercise 5
	const newGameButton= document.querySelector('.btn');

	newGameButton.addEventListener('click', () => {

		state= Array(9).fill('');
		gameOver= false;
		currentPlayer= 'X';

		squares.forEach(square => {
			square.textContent= '';
			square.classList.remove('X', 'O', 'hover');
		});

		statusDiv.textContent= 'Move your mouse over a square and click to play an X or an O.';
		statusDiv.classList.remove('you-won');
	});
});

	


