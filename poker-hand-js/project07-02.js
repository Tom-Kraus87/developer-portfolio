"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-02

      Project to deal cards from a shuffled poker deck
      Author: Tom Kraus
      Date: 11/2/2024 

      Filename: project07-02.js
*/

let deckStr = `Ace of Hearts, King of Hearts, Queeen of Hearts, Jack of Hearts,
               10 of Hearts, 9 of Hearts, 8 of Hearts, 7 of Hearts, 6 of Hearts,
               5 of Hearts, 4 of Hearts, 3 of Hearts, 2 of Hearts,
               Ace of Spades, King of Spades, Queeen of Spades, Jack of Spades,
               10 of Spades, 9 of Spades, 8 of Spades, 7 of Spades, 6 of Spades,
               5 of Spades, 4 of Spades, 3 of Spades, 2 of Spades,
               Ace of Diamonds, King of Diamonds, Queeen of Diamonds, Jack of Diamonds,
               10 of Diamonds, 9 of Diamonds, 8 of Diamonds, 7 of Diamonds, 6 of Diamonds,
               5 of Diamonds, 4 of Diamonds, 3 of Diamonds, 2 of Diamonds, 
               Ace of Clubs, King of Clubs, Queeen of Clubs, Jack of Clubs,
               10 of Clubs, 9 of Clubs, 8 of Clubs, 7 of Clubs, 6 of Clubs,
               5 of Clubs, 4 of Clubs, 3 of Clubs, 2 of Clubs`;

let cards = document.querySelectorAll("div#hand span"); 
let cardsLeft = document.getElementById("cardsLeft");
let deck = [];

document.getElementById("deal").onclick = function() {   
   

    // Function to create and shuffle a new deck
    function newDeck() {
        // Split deckStr at each comma and store in deck array
        deck = deckStr.split(",");

        // Shuffle the deck using the shuffle function
        deck.sort(shuffle);
    }

    // Shuffle function to randomize the order of the deck
    function shuffle(a, b) {
        return 0.5 - Math.random();
    }

    // Deal cards on button click
    document.getElementById("deal").onclick = function() {

            // Clear previous cards
            cards.forEach(card => card.textContent = "");

            // If the deck is empty, generate a new shuffled deck
            if (deck.length === 0) {
                newDeck();
            }

            // Loop to deal up to 5 cards
            for (let i = 0; i < 5 && deck.length; i++) {
                // Check if there are cards left in the deck to deal
                if (deck.length > 0) {
                    // Deal the top card (last item in the array) and set as the text content
                    cards[i].textContent = deck.pop().trim();
                } else {
                    // If no cards left in the deck, clear the cards
                    cards[i].textContent = "";
                }           
            }

             // Update the number of cards left
            cardsLeft.textContent = deck.length;
        }

        
    };

            
