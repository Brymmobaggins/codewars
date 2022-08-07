// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let highestCount = 0;
    let highestWord = ''
    let splitArray = x.split(" ")

    for (let i = 0; i < splitArray.length; i++) {
        let sum = 0
        let word = splitArray[i]
        for(let j = 0; j < word.length; j++){
            let letter = word[j]
            sum += alphabet.indexOf(letter) + 1
        }
        if(sum > highestCount){
            highestCount = sum
            highestWord = word
        }

    }
    return highestWord
}
console.log(high('hello this is javascript'))