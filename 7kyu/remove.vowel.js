// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


// first solution
function removeVowel(str) {
    let newString = str.split("")
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            newString[i] = ""
        }
    }
    return newString.join("")
}
console.log(removeVowel("JAvAScript is awesome")) // JvScrpt s wsm

// second solution
// function removeVowel(str) {
//     let newString = str.split("")
//     let vowel = ["a", "e", "i", "o", "u"]
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase()
//         for (let j = 0; j < vowel.length; j++) {
//             if (char === j[i]) {
//                 newString[i] = ""
//             }
//         }
//     }
//     return newString.join("")
// }

// console.log(removeVowel("life is beautiful"))

// third solution using regular expression

// function removeVowel(str){
//     return str.replace(/[aeiou]/ig,'')
// }
// console.log(removeVowel("life is beautiful"))   // lf s btfl