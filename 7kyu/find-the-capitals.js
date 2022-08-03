// Write a function that takes a single string(word) as argument.The function must return an ordered list containing the indexes of all capital letters in the string.

//     Example
// Test.assertSimilar(capitals('CodEWaRs'), [0, 3, 4, 6]);

//  solution
function capital(word) {
    let capsIndex = []                     // creat an array for the index to be returned
    for (let i = 0; i < word.length; i++) { // loop through the word
        if (word[i].toUpperCase() == word[i]) {  // if statement to check if each in every iteration is uppercase 
            capsIndex.push(i)                   // push the index insdie the `capIndex` array
        }
    }
    return capsIndex                          // return the `capIndex` array
}
console.log(capital("JavaSCRIPT"))  // [ 0, 4, 5, 6, 7, 8, 9]

