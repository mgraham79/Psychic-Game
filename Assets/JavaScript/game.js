var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessAnswers = [];

document.onkeyup = function (event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    if (computerChoices.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins++;
            guessesLeft = 9;
            guessAnswers = [];
        }

        if (userGuess != computerGuess) {
            guessesLeft--;
            guessAnswers.push(userGuess);
        }

        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 9;
            guessAnswers = [];


        }

        var html =
            "<h1>Psychic Game</h1>" +
            "<h4>Guess what letter I'm thinking of</h4>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Your Guesses so far: " + guessAnswers.join (", ") + "</p>";

        document.querySelector("#game").innerHTML = html;


    }
};