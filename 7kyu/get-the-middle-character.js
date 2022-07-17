// You are going to be given a word. Your job is to return the middle character of the word.If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// # Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

function getMiddleCharacter(string){
    let length                                      // create variable for the length 
    let position;                                   // create variable for the position
    if (string.length % 2 == 1) {                   // condition to check for if odd
        position = string.length / 2
        length = 1 
    }else{
        position = string.length / 2 - 1             // 
        length = 2
    }
    return string.substring(position, position + length)
}
console.log(getMiddleCharacter("dace"))

