/* DESCRIPTION:
Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!" */

function replace(str) {
    // empty str that holds the result
    let newString = "" 
    
    // variable for the vowel
    let vowel = "aeiouAEIOU"
    
    for (let i = 0; i < str.length; i++) {
        if (vowel.includes(str[i])) {
            newString += '!'
        } else {
            newString += str[i]
        }
    }
    return newString 
}
console.log(replace("ABCDEewex"))
