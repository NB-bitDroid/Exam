const submitGuessBtn = document.getElementById("submitBtn");
const guessCloseness = document.getElementById("clossnesOfTheGuess");
const rest_btn = document.getElementById("newBtn");
let random_num = (Math.floor(Math.random() * 10) + 1);
let closeness_of_guesses = "";
let numOfGuesses = 0;

submitGuessBtn.addEventListener("click", () => {
    numOfGuesses++;
    let finalGuess = document.getElementById("guess");
    if (Number(finalGuess.value) == random_num) {
        closeness_of_guesses = (`Guess: ${numOfGuesses} - Correct!`);
    } if (Number(finalGuess.value) < random_num) {
        closeness_of_guesses = (`Guess: ${numOfGuesses} - Too low!`);
    } if (Number(finalGuess.value) > random_num) {
        closeness_of_guesses = (`Guess: ${numOfGuesses} - Too high!`);
    };
    updatestuff();

});

rest_btn.addEventListener("click", () => {
    numOfGuesses = 0;
    random_num = (Math.floor(Math.random() * 10) + 1);
    closeness_of_guesses = "";
    updatestuff();
});

function updatestuff(){
    guessCloseness.innerText = closeness_of_guesses;
    random_num.innerText = random_num;
};