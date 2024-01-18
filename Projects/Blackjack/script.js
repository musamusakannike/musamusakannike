let player = {
	name: "Player",
	chips: 150
}
let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackjack = false;
let messageEl = document.querySelector('#message-el');
let cardsEl = document.querySelector('#cards-el');
let sumEl = document.querySelector('#sum-el');
let playerEl = document.querySelector('#player-el')
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
	let randomNumber = Math.floor(Math.random()*13) + 1;
	if (randomNumber === 1) {
		return 11;
	} else if (randomNumber === 11 || randomNumber === 12 || randomNumber === 13) {
		return 10;
	} else {
		return randomNumber;
	}
}

function renderGame() {
	cardsEl.textContent = "Cards: ";
	for (var i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + ", ";
	}
	sumEl.textContent = "Sum: " + sum;
	if (sum < 21) {
		messageEl.textContent = "Do you want to draw a new card?";
	} else if (sum === 21) {
		messageEl.textContent = "Yay, you have Blackjack!";
		hasBlackjack = true;
	} else {
		messageEl.textContent = "Sorry, You're out of the game";
		isAlive = false;
	}
}

function startGame() {
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;
	isAlive = true;
	renderGame();
}

function newCard() {
	if (isAlive === true && hasBlackjack === false) {
		let card = getRandomCard();
		sum += card;
		cards.push(card);
		renderGame();
	}
}