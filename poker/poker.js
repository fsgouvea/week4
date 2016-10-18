// shuffles (randomizes an array)
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns a deck of cards
// e.g. getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}

var myranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
var mysuits = ['clubs', 'diamonds', 'hearts', 'spades'];

var rand = myranks[Math.floor(Math.random() * myranks.length)];


$(function() {
  $(".deal").on("click", function(event) {
    event.preventDefault()
    
    var myranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
    var mysuits = ['clubs', 'diamonds', 'hearts', 'spades'];
    var c1 = myranks[Math.floor(Math.random() * myranks.length)] + "_of_" + mysuits[Math.floor(Math.random() * mysuits.length)];
    console.log(c1)
    $("#c1").attr("src", "http://golearntocode.com/images/cards/" + c1 + ".png")

    var myranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
    var mysuits = ['clubs', 'diamonds', 'hearts', 'spades'];
    var c2 = myranks[Math.floor(Math.random() * myranks.length)] + "_of_" + mysuits[Math.floor(Math.random() * mysuits.length)];
    console.log(c2)
    $("#c2").attr("src", "http://golearntocode.com/images/cards/" + c2 + ".png")

    var myranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
    var mysuits = ['clubs', 'diamonds', 'hearts', 'spades'];
    var c3 = myranks[Math.floor(Math.random() * myranks.length)] + "_of_" + mysuits[Math.floor(Math.random() * mysuits.length)];
    console.log(c3)
    $("#c3").attr("src", "http://golearntocode.com/images/cards/" + c3 + ".png")

    var myranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
    var mysuits = ['clubs', 'diamonds', 'hearts', 'spades'];
    var c4 = myranks[Math.floor(Math.random() * myranks.length)] + "_of_" + mysuits[Math.floor(Math.random() * mysuits.length)];
    console.log(c4)
    $("#c4").attr("src", "http://golearntocode.com/images/cards/" + c4 + ".png")

    var myranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
    var mysuits = ['clubs', 'diamonds', 'hearts', 'spades'];
    var c5 = myranks[Math.floor(Math.random() * myranks.length)] + "_of_" + mysuits[Math.floor(Math.random() * mysuits.length)];
    console.log(c5)
    $("#c5").attr("src", "http://golearntocode.com/images/cards/" + c5 + ".png")
    })

})
