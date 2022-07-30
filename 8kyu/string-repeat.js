// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples(input -> output)
// 6, "I" -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// my solution

function repeat(number, string) {

    return string.repeat(number)
}

// second solution 
function repeatString(str, num){
    let newString  = ""
    // loop through the number
    for(let i = 0; i < num; i++){
        newString += str
    }
    return newString
}
console.log(repeatString('abc', 3))   // abcabcabc

