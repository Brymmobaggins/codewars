// DESCRIPTION:
// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0


// first solution
function strCount(str, letter) {
    let count = 0                           // create a variable to holds the account
    for (let i = 0; i < str.length; i++) {  // loop throgh the array 
        if (str[i] == letter) {      // if statement to check iteration of every string is equals to letter
            count++
        } else {
            count
        }
    }
    return count                   // return the account
}
console.log(strCount("hello javascript", "a")) //  2






