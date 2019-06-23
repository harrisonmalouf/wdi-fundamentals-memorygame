// console.log("User flipped" + cardOne);
// console.log("User flipped" + cardTwo);

var cards = ["queen", "queen", "king", "king"]

var cardsInPlay = []

var cardOne = cards[0]
var cardTwo = cards[2]

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log(cardOne)
console.log(cardTwo)

if (cardsInPlay.length === 2) {
	if (cardOne === cardTwo) {
		alert("you've found a match!")
	} else {
		alert("Try again!")
	}
}
