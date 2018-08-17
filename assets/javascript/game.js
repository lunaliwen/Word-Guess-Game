//Create an array that lists out all the options
var game = ["pig", "dog", "tiger", "elephant"];

var wins = 0;

//If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _
var choice = game[Math.floor(Math.random() * game.length)];

var dashArray = [];

for (i = 0; i < choice.length; i++) {
    dashArray.push('_');
}

var remainingletters = choice.length;

//Creating variables that holds "Wins", "# of guesses remaining", "Letters Already Guessed"

var GuessesRemaining = 10;
var LettersAlreadyGuessed = [];

//This function is run when user presses a key
document.onkeyup = function (event) {

    //Determines which key is pressed
    var userGuess = event.key.toLowerCase();

    var success = false;

    for (var z = 0; z < LettersAlreadyGuessed.length; z++) {
        if (userGuess === LettersAlreadyGuessed[z]) {
            return;
        }

    }

    for (var j = 0; j < choice.length; j++) {

        //the user has to guess a letter
        if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") ||
            (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") ||
            (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") ||
            (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z") && (remainingletters > 0) && (GuessesRemaining > 0)) {

            //show up the letter if it matches in the game[i]
            if (userGuess === choice[j]) {
                dashArray[j] = userGuess;
                remainingletters--;
                success = true;
            }

            //Put letter that doesn't match in letter already guessed
           

            else if (dashArray[j] === '_') {
            
                LettersAlreadyGuessed.push(userGuess);
                
            }

        }


    };


    //#ofGuessesRemaining-1
    GuessesRemaining = GuessesRemaining - 1

    if (remainingletters === 0 && GuessesRemaining >= 0) {

        //display answer
        alert(choice);

        wins++;
        // reset the game 
        choice = game[Math.floor(Math.random() * game.length)];

        dashArray = [];

        for (i = 0; i < choice.length; i++) {
            dashArray.push('_');
        }

        remainingletters = choice.length;

        //Creating variables that holds "Wins", "# of guesses remaining", "Letters Already Guessed"

        GuessesRemaining = 10;
        LettersAlreadyGuessed = [];
    }

    //display on HTML
    var targetDiv = document.getElementById("empty");

    //We create a new div called newDiv
    var newDiv = document.createElement("div");

    //Give this new div a text
    newDiv.textContent = "Current word: " + dashArray + " " + 
        "wins: " + wins + " " + 
        "# of Guesses Remaning " + GuessesRemaining + " " + 
        "Letters Already Guessed " + LettersAlreadyGuessed + " ";

    //Combine the two Divs together on the page
    targetDiv.appendChild(newDiv);


};

