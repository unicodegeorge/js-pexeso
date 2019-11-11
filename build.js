
export class Build {

    constructor(numberOfCards, color, typeOfCards) {
        this.numberOfCards = numberOfCards;
        this.color = color;
        this.typeOfCards = typeOfCards;


    }


    draw() {

        let field = document.getElementById("field");

        console.log(this.numberOfCards);
        let pole = [];
        for (let index = 0; index < this.numberOfCards; index++) {


            let card = document.createElement("div");
            card.className = "card";
            card.id = "card" + index;
          
            field.appendChild(card);
            pole.push(card);

            


            console.log(pole[index]);
        }
    }

    setSymbols() {
        let field = [];

        for (let i = 0; i < this.numberOfCards; i++) {
            let selectedDiv = document.getElementById("card" + i);
            field.push(selectedDiv);


        }

        let xUsed = 2;
        let oUsed = 2;
        let starUsed = 2;

        for (let x = 0; x < 50; x++) {
            let randomNum = Math.floor(Math.random() * Math.floor(this.numberOfCards));;


            let symbol = document.createElement("h1");
            
            symbol.className = "symbol";
            symbol.id="symbol"+1;
            symbol.innerText = "X";
            

            if (xUsed > 0) {
                console.log(randomNum);
                if (field[randomNum].innerText == "X" || field[randomNum].innerText == "O" || field[randomNum].innerText == "*") {
                    console.log("WHy?");
                } else {
                    symbol.innerText = "X";

                    field[randomNum].appendChild(symbol);
                    xUsed = xUsed - 1;
                }
            }

            else if (oUsed > 0) {
                if (field[randomNum].innerText == "X" || field[randomNum].innerText == "O" || field[randomNum].innerText == "*") {

                } else {
                    symbol.innerText = "O";
                    field[randomNum].appendChild(symbol);
                    oUsed--;
                }
            }

            else if (starUsed > 0) {
                if (field[randomNum].innerText == "X" || field[randomNum].innerText == "O" || field[randomNum].innerText == "*") {
                }
                else {
                    symbol.innerText = "*";
                    if (field[randomNum].innerText == "X") {

                    } else {
                        field[randomNum].appendChild(symbol);
                        starUsed--;
                    }
                }


            }

           
            


        }



    }
}

