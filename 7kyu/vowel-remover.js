// Create a function called shortcut to remove the lowercase vowels(a, e, i, o, u) in a given string.

//     Examples
// "hello"     -- > "hll"
// "codewars"  -- > "cdwrs"
// "goodbye"   -- > "gdby"
// "HELLO"     -- > "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function vowelRemover(string) {
    let vowels = "a,e,i,o,u"  // create a variable that holds vowel and assgin vowels to it
    let newStr = string.split("") // split the input string 
    for (let i = 0; i < newStr.length; i++) { // loop through the input string
        for (let j = 0; j < vowels.length; j++) { // loop through the vowels
            if ( newStr[i] === vowels[j]) { // condion to check for if for index value input is equals to index value of vowel 
                newStr[i] = ""           // if yes, remove the value
            }
        }
    }
    return newStr.join("")              // return the string and join them together
}
console.log(vowelRemover("codewars"))
