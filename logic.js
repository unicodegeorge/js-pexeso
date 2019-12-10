import { Build } from "./build.js";

export class Logic {
    //if (document.getElementById('divId').innerHTML.indexOf("word") != -1) { }

    constructor() {
        //cards left to pick
        this.cardsLeft = 2;

        //picked cards
        this.cardsPicked = [];

        //symbols inside picked cards
        this.cardsPickedSymbols = [];

        //array of cards which where found
        this.cardFound = [];

        //decleration of variable number of cards
        this.numberOfCards = 0;



    }

    //Returns number of cards
    getNumberOfCards(numOfCards) {
        this.numberOfCards = numOfCards;
    }

    //Check if there is no cards left.
    checkWin() {

        setTimeout(() => {
            console.log(this.numberOfCards);
            console.log(this.cardFound.length);

            if (this.cardFound.length == this.numberOfCards) {
                alert("YOU WON");
                location.reload();
            } else {

            }
        }, 500);


    }

    

    //select cards
    select(card) {

        //Check if firt card hasn't been chosen.
        if (this.cardsPicked[0] == undefined) {


            this.cardsLeft--;
            //Add picked card to array
            this.cardsPicked.push(card);

            //Set class of the first card to "selected"
            this.cardsPicked[0].className = "card selected";

            //Set visibility of the first symbol to "visibile"
            this.cardsPicked[0].getElementsByClassName("symbol").item(0).style = "visibility: visible";

        }

        //Check if second card hasn't been chosen.
        else if (this.cardsPicked[1] == undefined) {

            //Check if second card doesn't equal to first card
            if (card != this.cardsPicked[0]) {

                //Add picked card to array
                this.cardsPicked.push(card);

                //Set class of the first card to "selected"
                this.cardsPicked[1].className = "card selected";

                this.cardsLeft--;

                //Set visibility of the first symbol to "visibile"
                this.cardsPicked[1].getElementsByClassName("symbol").item(0).style = "visibility: visible";

            } else {
                //output "invalid move" if code above returns false
                console.log("invalid move");
            }
        }




        //Calls function getSelectedCardsSymbol() if player selected 2 cards
        if (this.cardsPicked.length == 2) {
            this.getSelectedCardsSymbols(this.cardsPicked[0], this.cardsPicked[1]);
        }


    }

    //get symbols from selected cards

    getSelectedCardsSymbols(card1, card2) {

        //select symbol from card1
        let symbol1 = card1.getElementsByClassName("symbol").item(0);

        //select symbol from card2
        let symbol2 = card2.getElementsByClassName("symbol").item(0);



        //calls function checkSymbols()
        this._checkSymbols(symbol1, symbol2)


    }

    //This function compare 2 symbols of chosen cards
    _checkSymbols(cardSym1, cardSym2) {

        //check if chosen symbols match
        if (cardSym1.innerText == cardSym2.innerText) {
            //if true -> push 2 cards into cardFound array
            this.cardFound.push(this.cardsPicked[0], this.cardsPicked[1]);

            //set timeOut to 600 ms

            setTimeout(() => {
                //set visibility of the first card to hidden
                this.cardsPicked[0].style = "visibility: hidden";

                //set visibility of the second card to hidden
                this.cardsPicked[1].style = "visibility: hidden";
            }, 600);


            //set timeOut to 600 ms
            setTimeout(() => {

                //reset cardsPicked array
                this.cardsPicked = [];

                //calls function checkWin
                this.checkWin();

            }, 600);

        } else {
            //set timeOut to 600 ms
            setTimeout(() => {
                //set visibility of the second card to hidden
                this.cardsPicked[1].getElementsByClassName("symbol").item(0).style = "visibility: hidden";
                //set visibility of the first card to hidden
                this.cardsPicked[0].getElementsByClassName("symbol").item(0).style = "visibility: hidden";


                //set className of the first card to "card"
                this.cardsPicked[0].className = "card";
                //set className of the second card to "card"
                this.cardsPicked[1].className = "card";
            }, 600);

            //set timeOut to 600 ms
            setTimeout(() => {

                //reset cardsPicked array
                this.cardsPicked = [];


            }, 600);
        }
    }



}


