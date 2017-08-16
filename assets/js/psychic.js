//variables #
var wins = 0;
var losses = 0;
var guesses = 11;
var guessesLeft = 11;
var guessedLetters = [];
var letterToGuess = null;


//30 possible letters
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


//Formula to select a random letter to guess
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Allows the user 11 guesses
// guesses = guesses || 11
var updateGuessesLeft = function() {

// Select the HTML obeject/element which equals guessesLeft 
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};
//math function

var updateLetterToGuess = function() {

  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
// Here we take the guesses the user has tried -- then display it as letters separated by commas. 
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Function to reset
var reset = function() {
  totalGuesses = 11;
  guessesLeft = 11;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


//If onkeyup does not work, try onkeydown or press****.
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("LOL, you guessed the letter!");
                reset();
            }
        }else if(guessesLeft == 0){
            // if loss given, html should update to display 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("LOL You lost, try again");
            //call reset after losing
            reset();
        }
};

