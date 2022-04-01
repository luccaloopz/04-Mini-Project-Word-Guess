var startButton = document.querySelector("#start-game");
var wordContent = document.querySelector("#word-content");

const wordBank = ["fuzzy", "guitar", "camera", "computer", "keyboard", "mouse", "microphone", "monitor", "coffee", "tea", "water", "sandwich", "pen", "pencil", "telephone"];
var selectedWord;
var selectedWordMasked;

startButton.addEventListener("click", function() {
    selectedWord = selectGameWord();
    maskGameWord();
    wordContent.textContent = selectedWordMasked;
    console.log(selectedWord);
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