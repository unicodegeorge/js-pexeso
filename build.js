
import { Logic } from "./logic.js";
export class Build {

    constructor(numberOfCards, color, typeOfCards) {
        this.numberOfCards = numberOfCards;
        this.color = color;
        this.typeOfCards = typeOfCards;
        this.logic = new Logic;
        this.pole = [];
        this.field = document.getElementById("field");
        this.poleSymbol = ["X", "O", "*", "%", "[]"];
        this.usedNumbers = [];


    }
    //function check if numberOfCards is ok

    checkNumberOfCards(numberOfCards) {
        
        //checks if numberOfCards is even
        if (numberOfCards % 2 != 0) {
            
            //creates variable closetsNum which equals to numberOfCards + 1
            let closestNum = numberOfCards + 1;

            //set numberOfCards to closest even number
            this.numberOfCards = closestNum;
            console.log("Pocet karet musi byt sudy. Pocet karet na staven na " + closestNum);


        }

        //checks if numberOfCards is smaller than 10
        if (numberOfCards > 10) {
            this.numberOfCards = 10;
            console.log("Maximalní poèet karet je 10. Poèet karet nastaven na 10");
        }
    }

    //sends the value of numberOfCards to logic.js
    sendNumberOfCardsToLogic() {
        this.logic.getNumberOfCards(this.numberOfCards);
    }

    //this function draws the cards
    draw() {

        //calls function checkNumberOfCards
        this.checkNumberOfCards(this.numberOfCards);
        
        //calls function sendNumberOfCardsToLogic
        this.sendNumberOfCardsToLogic();

        //creates variable field which stores element with id field
        let field = document.getElementById("field");


       
        //creates cards
        for (let index = 0; index < this.numberOfCards; index++) {

            //create element div and stores it into a variable called card
            let card = document.createElement("div");

            //set className of a card to "card"
            card.className = "card";

            //adds card to div called "field"
            this.field.appendChild(card);

            //adds card to array called "pole"
            this.pole.push(card);
            card.addEventListener("click", () => {

                //calls function select from class logic and passes chosen card
                this.logic.select(this.pole[index]);
            });
           
        }

    }

    //set symbols in cards
    setSymbols() {

        //creates variable called symbol
        let symbol;

        
        //creates a loop which works until i reaches value of numberOfCards devided by 2
        for (let i = 0; i < this.numberOfCards / 2; i++) {

            //chooses symbol from pole symbol on position -> i <-
            symbol = this.poleSymbol[i];
            
            for (let x = 0; x < 2; x++) {
                
                //creates div element and stores it into a variable called symbolElement
                let symbolElement = document.createElement("div");

                //set className of symbolElement to "symbol"
                symbolElement.className = "symbol";

                //set id of symbolElement to "symbolPair"+ value of i
                symbolElement.id = "symbolPair" + i;

                //set inner text of symbolElement to chosen symbol from above
                symbolElement.innerText = symbol;

                //calls function getRandomCard and add symbol to it
                this._getRanCard().appendChild(symbolElement);
                
            }

        }

    }

    //returns random card
    _getRanCard() {

        return this.pole[this._getRanNum()];
    }


    _getRanNum() {
        let nonused = false;
        let random;
        //generates a randome num until a nonused num is found
        while (!nonused) {

            random = Math.floor(Math.random() * Math.floor(this.numberOfCards)); //generates random number from 0 to number of cards

            if (!this._isNumUsed(random)) { //if nonused num found, exits the loop
                nonused = true;
            }

        }

        this.usedNumbers.push(random); //pushes number into used array
        return random;  //returns

    }


    _isNumUsed(num) {
        //logical operation -> if usedNumber equal passed atribute than returns true
        //else returns false
        if (this.usedNumbers.includes(num)) {
            return true;
        }

        else {
            return false;
        }
    }


}








