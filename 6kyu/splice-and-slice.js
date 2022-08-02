// slice and Splice
// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array.The input arrays should remain the same after the function runs.

function frankenSplice(firstArray, secondArray, n){

    let localArray = secondArray.slice()
    for(let i = 0; i < firstArray.length; i++){
        localArray.splice(n, 0, firstArray[i])
        n++
    }
    return localArray
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)) // [ 4, 1, 2, 3, 5, 6 ]
