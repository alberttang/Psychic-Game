
    //array for all letters

    var compLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


    //variabels for wins, losses, guesses left, and guesses so far

    var win = 0;
    var lose = 0;
    var guessLeft = 9;
    var yourGuess = "";
    var compGuess = compLetters[Math.floor(Math.random() * compLetters.length)];


    function resetGame() {
        guessLeft = 9;
        document.getElementById("your-guess").innerHTML = "";
        compGuess = compLetters[Math.floor(Math.random() * compLetters.length)];

    }

    // This function is run whenever the user presses a key.

    document.onkeyup = function(event) {

        // Determines which key was pressed.

        var userInput = event.key;
        //      


        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var youGuess = userInput;

        document.querySelector("#your-guess").innerHTML += youGuess;

        if (userInput === compGuess) {

            resetGame();
            win++;






        } else if (guessLeft > 1) {
            guessLeft--;

        } else {
            resetGame();
            lose++;


        }
        var wins = "Wins: " + win;
        var losses = "Losses: " + lose;
        var guessRemain = "Guesses Left: " + guessLeft;
        // var COMPguess = "Computer Guess: " + compGuess;



        document.querySelector(".wins").innerHTML = wins;
        document.querySelector(".losses").innerHTML = losses;
        document.querySelector(".guess-remain").innerHTML = guessRemain;
        // document.querySelector(".compGuess").innerHTML = COMPguess;


    };
