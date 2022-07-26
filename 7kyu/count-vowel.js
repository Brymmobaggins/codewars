// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


// first solution
function getCounts(x){
    let count = 0                                                  // create a varible for count
    for(let i = 0; i < x.length; i++){                             // loop through the string 
        if(x[i] == "a" || x[i] == "e" || x[i] == "i" || x[i] == "0" || x[i] === "u"){
            count++
        }
    }
    return count
}
console.log(getCounts("Ibrahim"))      // counts = 2


// second solution 
function getCount(string) {
    let count = 0
    let vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < string.length; i++) {            // loop throught the string
        for (let j = 0; j < vowels.length; j++) {        // loop through the vowl
            if (string[i] === vowels[j]) {
                count++
            }
        }
    }
    return count                                        // retun count
}
console.log(getCount('Javascript')) 