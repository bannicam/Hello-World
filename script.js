



var deck =[
  {cardName:'Ace of Hearts ', cardValue: 11},
  {cardName:'Ace of Clubs', cardValue: 11},
  {cardName:'Ace of Diamonds', cardValue: 11},
  {cardName:'Ace of Spades', cardValue: 11},
  {cardName:'King of Hearts', cardValue: 10},
  {cardName:'King of Clubs', cardValue: 10},
  {cardName:'King of Diamonds', cardValue: 10},
  {cardName:'King of Spades', cardValue: 10},
  {cardName:'Queen of Hearts', cardValue: 10},
  {cardName:'Queen of Clubs', cardValue: 10},
  {cardName:'Queen of Diamonds', cardValue: 10},
  {cardName:'Queen of Spades', cardValue: 10},
  {cardName:'Jack of Hearts', cardValue: 10},
  {cardName:'Jack of Clubs', cardValue: 10},
  {cardName:'Jack of Diamonds', cardValue: 10},
  {cardName:'Jack of Spades', cardValue: 10},
  {cardName: '10 of Hearts', cardValue: 10},
  {cardName: '10 of Clubs', cardValue: 10},
  {cardName: '10 of Diamonds', cardValue: 10},
  {cardName: '10 of Spades', cardValue: 10},
  {cardName: '9 of Hearts', cardValue: 9},
  {cardName: '9 of Clubs', cardValue: 9},
  {cardName: '9 of Diamonds', cardValue: 9},
  {cardName: '9 of Spades', cardValue: 9},
  {cardName: '8 of Hearts', cardValue: 8},
  {cardName: '8 of Clubs', cardValue: 8},
  {cardName: '8 of Diamonds', cardValue: 8},
  {cardName: '8 of Spades', cardValue: 8},
  {cardName: '7 of Hearts', cardValue: 7},
  {cardName: '7 of Clubs', cardValue: 7},
  {cardName: '7 of Diamonds', cardValue: 7},
  {cardName: '7 of Spades', cardValue: 7},
  {cardName: '6 of Hearts', cardValue: 6},
  {cardName: '6 of Clubs', cardValue: 6},
  {cardName: '6 of Diamonds', cardValue: 6},
  {cardName: '6 of Spades', cardValue: 6},
  {cardName: '5 of Hearts', cardValue: 5},
  {cardName: '5 of Clubs', cardValue: 5},
  {cardName: '5 of Diamonds', cardValue: 5},
  {cardName: '5 of Spades', cardValue: 5},
  {cardName: '4 of Hearts', cardValue: 4},
  {cardName: '4 of Clubs', cardValue: 4},
  {cardName: '4 of Diamonds', cardValue: 4},
  {cardName: '4 of Spades', cardValue: 4},
  {cardName: '3 of Hearts', cardValue: 3},
  {cardName: '3 of Clubs', cardValue: 3},
  {cardName: '3 of Diamonds', cardValue: 3},
  {cardName: '3 of Spades', cardValue: 3},
  {cardName: '2 of Hearts', cardValue: 2},
  {cardName: '2 of Clubs', cardValue: 2}, 
  {cardName: '2 of Diamonds', cardValue: 2},
  {cardName: '2 of Spades', cardValue: 2},
  ];
  
  
var hitMe = function(){
  hand.push(randomCard());
}


var randomCard = function(){
  return deck[Math.floor(Math.random()*deck.length)];
}


var dealerHand = [];

dealerHand.push(randomCard());
dealerHand.push(randomCard());
dealerHand.push(randomCard());
dealerHand.push(randomCard());

var hand = [];

hand.push(randomCard());
hand.push(randomCard());
hand.push(randomCard());
hand.push(randomCard());

console.log("Welcome to Blackjack!");

console.log("You are dealt: " );
console.log (" " + hand[0].cardName);
console.log (" " + hand[1].cardName);
console.log("Your total is " + (hand[0].cardValue + hand[1].cardValue));
console.log("Do you wanna get hit again? (Y/N)");



//
var hitButton = document.getElementById('hit-button');
var stayButton = document.getElementById('stay-button');
/*
window.onload=function(){
  hitButton.addEventListener('hitButton', function(){
  randomCard = (hand[0].cardValue + hand[1].cardValue);
  hitButton.style.display = 'inline';
  
})
}
*/



    
