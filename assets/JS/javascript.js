var startButton = document.querySelector("#start-game");
var wordContent = document.querySelector("#word-content");

const wordBank = ["fuzzy", "guitar", "camera", "computer", "keyboard", "mouse", "microphone", "monitor", "coffee", "tea", "water", "sandwich", "pen", "pencil", "telephone"];
var selectedWord;
var selectedWordMasked;

startButton.addEventListener("click", function() {
    selectedWord = selectGameWord();
    maskGameWord();
    wordContent.textContent = selectedWordMasked;
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