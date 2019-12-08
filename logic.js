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

    //select cards

    select(card) {


        if (this.cardsPicked[0] == undefined) {
            

            this.cardsLeft--;
            this.cardsPicked.push(card);
            this.cardsPicked[0].className="card selected";
            this.cardsPicked[0].getElementsByClassName("symbol").item(0).style="visibility: visible";

        }


        else if (this.cardsPicked[1] == undefined) {

            if (card != this.cardsPicked[0]) {
                this.cardsPicked.push(card);
                this.cardsPicked[1].className="card selected";
                this.cardsLeft--;
                this.cardsPicked[1].getElementsByClassName("symbol").item(0).style="visibility: visible";

            } else {
                console.log("invalid move");
            }
        }





        if (this.cardsPicked.length == 2) {
            this.getSelectedCardsSymbols(this.cardsPicked[0], this.cardsPicked[1]);
        }


    }

    //get symbols from selected cards

    getSelectedCardsSymbols(card1, card2) {
        let symbol1 = card1.getElementsByClassName("symbol").item(0);
        let symbol2 = card2.getElementsByClassName("symbol").item(0);




        this._checkSymbols(symbol1, symbol2)


    }


    _checkSymbols(cardSym1, cardSym2) {
        if (cardSym1.innerText == cardSym2.innerText) {
            this.cardFound.push("x", "c");
            setTimeout(()=>{
                this.cardsPicked[0].style = "visibility: hidden";
                this.cardsPicked[1].style = "visibility: hidden";
            },600);
          
           
            
            setTimeout(()=>{
                this.cardsPicked.length = 0;
                this.checkWin();

            },600);
         
        } else {
            setTimeout(()=>{
                this.cardsPicked[1].getElementsByClassName("symbol").item(0).style="visibility: hidden";
                this.cardsPicked[0].getElementsByClassName("symbol").item(0).style="visibility: hidden";
                this.cardsPicked[0].className="card";
                this.cardsPicked[1].className="card";
            },600);
            
            setTimeout(()=>{
                this.cardsPicked.length = 0;
               

            },600);
        }
    }





    showCard() {

    }

}


