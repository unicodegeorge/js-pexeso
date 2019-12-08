import { Build } from "./build.js";

export class Logic {
    //if (document.getElementById('divId').innerHTML.indexOf("word") != -1) { }

    constructor() {
        this.cardsLeft = 2;
        this.cardsPicked = [];
     
        this.cardsPickedSymbols = [];
        this.cardFound = [];
        this.numberOfCards = 0;



    }

    getNumberOfCards(numOfCards) {
      this.numberOfCards = numOfCards;
    }
    checkWin() {
       
        setTimeout(()=>{
            console.log(this.numberOfCards);
            console.log(this.cardFound.length);
            
            if (this.cardFound.length == this.numberOfCards) {
                alert("YOU WON");
                location.reload();
            } else {
               
            }
        },500);
        
       
    }

    select(card) {


        if (this.cardsPicked[0] == undefined) {

            this.cardsLeft--;
            this.cardsPicked.push(card);

        }


        else if (this.cardsPicked[1] == undefined) {

            if (card != this.cardsPicked[0]) {
                this.cardsPicked.push(card);
                
                this.cardsLeft--;

            } else {
                console.log("invalid move");
            }
        }





        if (this.cardsPicked.length == 2) {
            this.getSelectedCardsSymbols(this.cardsPicked[0], this.cardsPicked[1]);
        }


    }


    getSelectedCardsSymbols(card1, card2) {
        let symbol1 = card1.getElementsByClassName("symbol").item(0);
        let symbol2 = card2.getElementsByClassName("symbol").item(0);




        this._checkSymbols(symbol1, symbol2)


    }


    _checkSymbols(cardSym1, cardSym2) {
        if (cardSym1.innerText == cardSym2.innerText) {
            this.cardFound.push("x", "c");
            this.cardsPicked[0].style = "visibility: hidden";
            this.cardsPicked[1].style = "visibility: hidden";
           
            
            this.cardsPicked.length = 0;
            this.checkWin();

        } else {
            this.cardsPicked.length = 0;
        }
    }





    showCard() {

    }

}


