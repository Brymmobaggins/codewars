// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.Return the resulting string.

// const res = require("express/lib/response")

// Note: input will never be an empty string

// my solution
function fakebin(x) {

    let result = ""              // create a variable that holds the result
    for (let i = 0; i < x.length; i++) {  // loop through th array
        if (x[i] < 5) {          // if statement to check is check if each iteration is less than 5
            result += 0          
        } else if (x[i] >= 5) {
            result += 1
        }
    }
    return result
}
console.log(fakebin("6"))  // 1
console.log(fakebin("3"))  // 0

