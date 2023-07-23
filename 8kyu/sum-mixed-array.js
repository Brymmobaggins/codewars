// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number

// my solution 

function mix(x){
    let numberSum = 0
    for (let i = 0; i < x.length; i++) {   // loop through the array
        numberSum += Number(x[i]);         // convert each iteration to number, sum it and assign to numberSum variable
    }
    return numberSum                      // return numberSum
}
console.log(mix([4, 5, 6, "4", "5"]))    // 24

