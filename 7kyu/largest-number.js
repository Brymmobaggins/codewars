// write a function that returns an array consisting of the largest number from each provided sub - array.For simplicity, the provided array will contain exactly 4 sub - arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].



function largestOfFour(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray.push(Math.max(...arr[i]))
    }
    return newArray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39]]));  // [ 5, 27, 39 ]
