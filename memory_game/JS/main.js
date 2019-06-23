// console.log("User flipped" + cardOne);
// console.log("User flipped" + cardTwo);

var cards = [
	 {
		rank: "king",
		cardImage: "images/king-of-diamonds.png",
		suit: "diamond"
	},
	{
		rank: "queen",		
		cardImage: "images/queen-of-hearts.png",
		suit: "heart"
	},
	{
		rank: "queen",
		cardImage: "images/queen-of-diamonds.png",
		suit: "diamond"
	},
	{
		rank: "king",
		cardImage:"images/king-of-hearts.png",
		suit: "heart"
	}
]

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
	} console.log("user flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
}
flipCard(1);
flipCard(3);