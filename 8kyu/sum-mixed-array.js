// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number

// my solution 

function mix(x){
    let numberSum = 0
    for (let i = 0; i < x.length; i++) {
        numberSum = Number(x[i]);
    }
    return numberSum
}