// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.Return the resulting string.

// const res = require("express/lib/response")

// Note: input will never be an empty string

// my solution
function fakebin(x) {

    let result = ""
    for (let i = 0; i < x.length; i++) {
        if (x[i] < 5) {
            result += 0
        } else if (x[i] <= 5) {
            result += 1
        }
    }
    return result
}