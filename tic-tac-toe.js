//excercise 1
document.addEventListener('DOMContentLoaded', () => {

	const board = document.getElementById('board');
	const squares = board.querySelectorAll('div');
	squares.forEach(sq => sq.classList.add('square'));
	
	//exercise 2
	let currentPlayer= 'X';
	const state= Array(9).fill('');

	squares.forEach((square, index) => {
		square.addEventListener('click', () => {
			if (!state[index]) {
				state[index]= currentPlayer;
				square.textContent= currentPlayer;
				square.classList.add(currentPlayer);

				currentPlayer= currentPlayer == 'X' ? 'O' : 'X';
			}
		});
	});
});

	


