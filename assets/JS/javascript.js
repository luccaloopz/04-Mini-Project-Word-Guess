var startButton = document.querySelector("#start-game");
var wordContent = document.querySelector("#word-content");
var timer = document.querySelector("#timer");
var lossCount = document.querySelector("#lossCount");
var winCount = document.querySelector("#winCount");
var message = document.querySelector("#message")

const wordBank = ["fuzzy", "guitar", "camera", "computer", "keyboard", "mouse", "microphone", "monitor", "coffee", "tea", "water", "sandwich", "pen", "pencil", "telephone"];
var selectedWord;
var selectedWordMasked;
var timerValue;
var timerStop = 0;
var gameActivity = false;
var lossIncrement = 0;
var winIncrement = 0;

checkForTotals();

startButton.addEventListener("click", function() {
    gameActivity = true;
    selectedWord = selectGameWord();
    maskGameWord();
    wordContent.textContent = selectedWordMasked;
    timerValue = 10;
    timer.textContent = timerValue;
    timerStop = window.setInterval(function() {
        timerValue--;
        if (timerValue > -1) {
            timer.textContent = timerValue;
        }
        else {
            window.clearInterval(timerStop);
            lossIncrement++;
            lossCount.textContent = lossIncrement;
            localStorage.setItem("Loss Total", lossIncrement);
            message.textContent = "Sorry, you lose."
        }
    }, 1000) 
});

// Selects a word at random from the word bank
function selectGameWord()
{
    var index = Math.random();
    index = index * wordBank.length;
    index = Math.floor(index);
    return wordBank[index];
}

function maskGameWord()
{
    selectedWordMasked = "";
    for(var i = 0; i < selectedWord.length; i++)
    {
        selectedWordMasked += "_";
    }
}

document.addEventListener("keydown", function(event){
    var key = event.key;
    key = key.toLowerCase();

    var newMaskedWord = "";

    // Iterate through the selected word's characters
    for(var i = 0; i < selectedWord.length; i++)
    {
        var charToCompare = selectedWord.charAt(i) // get the character to compare to the entered keystroke
        if(selectedWordMasked.charAt(i) !== "_") // if the character is already revealed...
        {
            newMaskedWord += selectedWord.charAt(i); // ...make sure it stayes revealed
        }
        else if(key === charToCompare) // if the character is not yet revealed but the character matches the keystroke...
        {
            newMaskedWord += key; // ...reveal it
        }
        else // if the character is not yet revealed AND the character does not match the keystroke...
        {
            newMaskedWord += "_"; // ...keep it hidden
        }
    }
    selectedWordMasked = newMaskedWord; // update the masked form of the word in JS
    wordContent.textContent = selectedWordMasked; // update the proper HTML element with the new masked form of the word
    if(checkForWin())
    {
        console.log("YOU WIN!!!");
        winIncrement++;
        winCount.textContent = winIncrement;
        window.clearInterval(timerStop);
        localStorage.setItem("Win Total", winIncrement);
        message.textContent = "You Win!"
    }
})

function checkForWin()
{
    for(var i = 0; i < selectedWordMasked.length; i++)
    {
        if(selectedWordMasked.charAt(i) === "_")
        {
            return false;
        }
    }
    return true;
}

function checkForTotals() {
    winIncrement = localStorage.getItem("Win Total");
    winCount.textContent = winIncrement;
    lossIncrement = localStorage.getItem("Loss Total");
    lossCount.textContent = lossIncrement;
}