// DESCRIPTION:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1 ^ 2 + 2 ^ 2 + 2 ^ 2 = 9.


// first solution
function squareSum(n) {
    let total = 0  
    for (let i = 0; i < n.length; i++) {
        total += (n[i] * n[i])
    }
    return total
}
console.log(squareSum([1, 2, 2]))


// second solution
function squareSum(n) {
    let total = 0      // create a varible to hold the sum
    for (let i = 0; i < n.length; i++) { // loop through the array
        total += Math.pow(n[i], 2) //squares each index, sum it and assign it total  
    }
    return total                  // return total
}
console.log(squareSum([1, 2, 2]))
