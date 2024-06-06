// 1

// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// For cancelled input show “Canceled.”
// If the word’s length is odd - show the middle character.If word’s length is even - show the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
//  For user input “test” should return “es”
//  For user input “character” should return “a”
//  For user input “B” should return “B”
//  For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”

function findMiddleChar(){
    let word = prompt("Word:");

    if (word === null) {
        alert("Cancelled.");
        return;
    }

    if (String(word).trim().length <= 0){
        alert("Invalid value");
        return;
    }

    let result;

    if (word.length % 2 === 0) {
        result = word[word.length / 2 - 1] + word[(word.length / 2)];
    }
    else {
        let index = Math.floor(word.length / 2);
        result = word[index];
    }

    alert(result);
}

findMiddleChar();