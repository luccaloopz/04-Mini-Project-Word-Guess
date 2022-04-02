# 04-Mini-Project-Word-Guess

## **Deployed Link**

Please click on the following link to view the game: https://luccaloopz.github.io/04-Mini-Project-Word-Guess/

## **Description**

This project is a word guess game. Once the user presses a Start Game button, a timer counts down from 10 seconds and an empty word appears on the screen where each letter is replaced by an underscore. The goal of the game is to guess the word before the timer runs out. This is done by selecting keys one by one on the user's keyboard. If a selected key matches a masked letter, the masked letter is revealed. After each win and loss, the result is tallied and displayed on the right side of the screen just below the start button. The user may play multiple times over and the win and loss results will persist across sessions. 

## **Languages Used**

* HTML
* CSS
* JavaScript

## **Important Code Snippets**

The below function randomizes a word from a word bank (an array comprised of strings of words). The `Math.random()` method chooses a floating point number between 0 and 1 that is then further adjusted to be an array index.

```JavaScript
function selectGameWord()
{
    var index = Math.random();
    index = index * wordBank.length;
    index = Math.floor(index);
    return wordBank[index];
}
```

This for-loop is ran only after the user presses a key. When the key is pressed, it is compared to each letter within the selected word. The loop traverses the masked word and reveals all the necessary characters associated with the user's chosen key(s). This is repeated until either the user reveals the entire word or the timer runs out.

```JavaScript
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
```

## **License**

&copy; 2022 John Netzel and Lucca Martins. All Rights Reserved.