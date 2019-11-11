// Executes this arrow function after everything loaded up

    
    import("./build.js")
        .then((module) => {
            console.log("test");
            const Build = module.Build;
            let test = new Build();
            test.draw();
           
            const game = new Build(6,"red",1);
            game.draw();
            game.setSymbols();
            
        });

