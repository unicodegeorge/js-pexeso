// Executes this arrow function after everything loaded up

    
    import("./build.js")
        .then((module) => {
            console.log("test");
            const Build = module.Build;
            
           
            const game = new Build(6,"darkred");
            game.checkNumberOfCards(game.numberOfCards);
            game.draw();
            game.setSymbols();
            
            
            
        });

