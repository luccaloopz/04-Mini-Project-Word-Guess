var startButton = document.querySelector("#start-game");

const wordBank = ["fuzzy", "guitar", "camera", "computer", "keyboard", "mouse", "microphone", "monitor", "coffee", "tea", "water", "sandwich", "pen", "pencil", "telephone"];

startButton.addEventListener("click", function() {
    console.log(selectGameWord());
});

// Selects a word at random from the word bank
function selectGameWord()
{
    var index = Math.random();
    index = index * wordBank.length;
    index = Math.floor(index);
    return wordBank[index];
}