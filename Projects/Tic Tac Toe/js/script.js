const cellElements = document.querySelectorAll('[data-cell]');
const statusElement = document.querySelector('.status');
const restartButton = document.querySelector('.restart-btn');
const winningElement = document.getElementById('winner');

let xIsNext = true;
let gameIsLive = true;

const xSymbol = 'X';
const oSymbol = 'O';

const winningCombos = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6],
];

const handleWin = (letter) => {
	gameIsLive = false;
	if (letter === 'draw') {
		winningElement.style.display = 'block';
		winningElement.innerText = 'Draw!';
		statusElement.style.visibility = "hidden";
	} else{
		winningElement.style.display = 'block';
		winningElement.innerText = `${letter} wins!`;
		statusElement.style.visibility = "hidden";
	}
};

const checkGameStatus = () => {
	const cellElementsArray = Array.from(cellElements);
	for (let i = 0; i < winningCombos.length; i++){
		const combo = winningCombos[i];
		const a = cellElementsArray[combo[0]].innerText;
		const b = cellElementsArray[combo[1]].innerText;
		const c = cellElementsArray[combo[2]].innerText;
		if (a==='' || b==='' || c==='') {
			continue;
		}
		if (a===b && b===c) {
			handleWin(a);
			cellElementsArray[combo[0]].classList.add('winning-cell');
			cellElementsArray[combo[1]].classList.add('winning-cell');
			cellElementsArray[combo[2]].classList.add('winning-cell');
			return;
		}
	}
	if (cellElementsArray.every((cell) => cell.innerText !== '')) {
		handleWin('draw');
	}
};

const handleCellClick = (e) => {
	const cell = e.target;
	const currentClass = xIsNext ? xSymbol: oSymbol;
	if (cell.innerText === '' && gameIsLive) {
		cell.innerText = currentClass;
		cell.classList.add(currentClass);
		checkGameStatus();
		xIsNext = !xIsNext;
		statusElement.textContent = `${xIsNext ? "Player X's turn": "Player O's turn"}`;
	}
};

const handleRestart = () => {
	xIsNext = true;
	gameIsLive = true;
	statusElement.textContent = "Player X's turn";
	statusElement.style.visibility = "visible";
	cellElements.forEach((cell) => {
		cell.innerText = '';
		cell.classList.remove(xSymbol);
		cell.classList.remove(oSymbol);
		cell.classList.remove('winning-cell');
		winningElement.style.display = 'none';
	});
};

cellElements.forEach((cell) => {
	cell.addEventListener('click', handleCellClick);
});

restartButton.addEventListener('click', handleRestart);