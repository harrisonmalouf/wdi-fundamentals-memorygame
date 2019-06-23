// console.log("User flipped" + cardOne);
// console.log("User flipped" + cardTwo);

var cards = ["queen", "queen", "king", "king"]

var cardsInPlay = []

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard(cardId) {

	if (cardsInPlay.length === 2) {
		if (cardOne === cardTwo) {
			alert("you've found a match!")
		} else {
			alert("Try again!")
		}
	} console.log("user flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
}
flipCard(1);
flipCard(3);