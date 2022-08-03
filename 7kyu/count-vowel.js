// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


// first solution
function getCounts(x){
    let count = 0                              // create a varible for count
    for(let i = 0; i < x.length; i++){          // loop through the string 
        if(x[i] == "a" || x[i] == "e" || x[i] == "i" || x[i] == "0" || x[i] === "u"){
            count++
        }
    }
    return count
}
console.log(getCounts("Ibrahim"))      // counts = 2


// second solution 
function getCount(string) {g
    let count = 0
    let vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < string.length; i++) {      // loop through the elemnent inside the string array
        for (let j = 0; j < vowels.length; j++) {  // loop through the elment inside the vowel array
            if (string[i] === vowels[j]) {         // if statement to check each iteration of string is the same as each iteration of vowel
                count++                          // countinue counting
            }
        }
    }
    return count                                 // return count
}
console.log(getCount('Javascript'))             // count = 3