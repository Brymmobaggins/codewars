// Build a function that returns an array of integers from n to 1 where n > 0.

// Example: n = 5 -- > [5, 4, 3, 2, 1


function reversedSeq(n) {
    let result = []            // create a variable that hold our result
    for (let i = n; i > 0; i--) { // loop through the number
        result.push(i)            // push each in index inside our result
    }

    return result               // return result
}


console.log(reversedSeq(5))  // [ 5, 4, 3, 2, 1 ]