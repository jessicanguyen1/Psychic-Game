
// Used the split method to add every character to an array
var letterArray = "abcdefghijklmnopqrstuvwxyz".split('');

// This variable will randomize the numbers which will be the index of the letter array
// Math.floor rounds down to a whole number
// Math.random generates floating point numbers 0-1
//Example: Math.random = 0.63746 * 25 = 15.9365 ~15

// At page load, we initialize a random number from letterIndex to plug into letterArray
var letterIndex = Math.floor(Math.random() * letterArray.length - 1);
console.log("The index we use is: " + letterIndex);

// We take the letterIndex random number and use it as the letterArray's index to get the letter of the position,
// Then we store that result in a new variable, secretLetter
var secretLetter = letterArray[letterIndex];
console.log("The secret letter is: " + secretLetter);

// At page load, we initialize win, losses, guessesLeft & lettersGuessed variables
var win = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];

// Create a counter track how many times pressed
var timesPressed = 1;

// At page load, we attach javascript variables, guesses, guessesLeft, wins & losses to the html elements class name

// guesses variable just creates link between
var guesses = document.getElementById("guesses");
var guessesLeft = document.getElementById("guesses-left");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");

// Every time we click the button, the game will start and re-initialize the variables declared at page load (resetting the game)
function playButton() {

    // Remove the question mark
    guesses.innerHTML = "";

    // We reset the random generated number
    letterIndex = Math.floor(Math.random() * letterArray.length - 1);
    console.log("The new letter index is: " + letterIndex);

    // We reset the secretLetter
    secretLetter = letterArray[letterIndex];
    console.log("The new secret letter is: " + secretLetter);




    // Every time a key is pressed, we store that letter into the letterArry IF it's not the secret letter
    document.onkeyup = function (event) {

        // if letters do not match, add that letter to "guesses" element
        if (event.key !== secretLetter) {


            // Ever time we press a key, we add the letter to the array below
            lettersGuessed.push(event.key);

            guesses.innerText = lettersGuessed[counter] // Inner text of #guesses = letterGuessed[position of array]

            // after we add the first position to the inner text, next time we press, we want the next position
            counter++

        }

    }
}






function guessLetter() {

}