/* When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

 */

function position(letter) {

    return "Position of alphabet: " + `${letter.charCodeAt(0) - 96}`
}
console.log(position("z"))  // 26

// solution 2

function position(letter){
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    return "Position of alphabet: " + (alphabet.indexOf(letter) + 1)
}
console.log(position("k"))  // 11

