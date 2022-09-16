// Given a non-empty array of integers, return the result of multiplying the values together in order   Example
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// my solution

function grow(x){
    let result         // create a variable to hold your result
    for(let i = 0; i < x.length; i++){ // loop through the items in the array
       result *= x[i]           // multiply each iteration in order and assign it to variable 'result'
    }
    return result     // return the result
}
console.log(grow([1,2,3,4]))   // 24