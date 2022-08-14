// Build a function that returns an array of integers from n to 1 where n > 0.

// Example: n = 5 -- > [5, 4, 3, 2, 1


function reversedSeq(n) {
    let result = []            // create an array
    for (let i = n; i > 0; i--) { // loop down from n to 1, that is from the number to 1
        result.push(i)            // push each i to the result
    }

    return result               // return result
}


console.log(reversedSeq(5))  // [ 5, 4, 3, 2, 1 ]