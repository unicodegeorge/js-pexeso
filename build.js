
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

    checkNumberOfCards(numberOfCards) {
        
        if (numberOfCards % 2 != 0) {

            let closestNum = numberOfCards + 1;
            this.numberOfCards = closestNum;
            console.log("Pocet karet musi byt sudy. Pocet karet na staven na " + closestNum);


        }
        if (numberOfCards > 10) {
            this.numberOfCards = 10;
            console.log("Maximalní poèet karet je 10. Poèet karet nastaven na 10");
        }
    }

    sendNumberOfCardsToLogic() {
        this.logic.getNumberOfCards(this.numberOfCards);
    }


    draw() {
        this.checkNumberOfCards(this.numberOfCards);
        this.sendNumberOfCardsToLogic();
        let field = document.getElementById("field");

        console.log(this.numberOfCards);

       

        for (let index = 0; index < this.numberOfCards; index++) {
            let card = document.createElement("div");
            card.className = "card";


            this.field.appendChild(card);
            this.pole.push(card);
            card.addEventListener("click", () => {
                this.logic.select(this.pole[index]);
            });
            console.log(this.pole[index]);
        }

    }


    setSymbols() {
        let symbol;

        

        for (let i = 0; i < this.numberOfCards / 2; i++) {
            symbol = this.poleSymbol[i];
            
            for (let x = 0; x < 2; x++) {
                

                let symbolElement = document.createElement("div");
                symbolElement.className = "symbol";
                symbolElement.id = "symbolPair" + i;
                symbolElement.innerText = symbol;
                this._getRanCard().appendChild(symbolElement);
                
            }

        }

    }


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
        if (this.usedNumbers.includes(num)) {
            return true;
        }

        else {
            return false;
        }
    }


}








