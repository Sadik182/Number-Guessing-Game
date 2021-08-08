//Simple Guessing Game Using Javascript.

const prompt = require('prompt-sync')({ sigint: true });
const numberGuess = Math.floor(Math.random() * 10) + 1;
let foundCorrectNumber = false;

while (!foundCorrectNumber) {
    let guess = prompt("Enter any number between 1 to 10: ");
    guess = Number(guess);
    if (guess === numberGuess) {
        console.log("Congratulations, You got it!");
        foundCorrectNumber = true;
    }
    else {
        console.log("Sorry! Let's Try Again!")
    }
}