// Write a function that returns the smallest value of an array 


// solution by using math.min function
// function smallestValue(n) {
//     return Math.min(...n)
// }
// console.log(smallestValue([2, 3, 4, 8, 5, 4]))



// alternstive solution using math.min

function smallestValue(n) {
    let smallest = n[0]
    for (let i = 1; n.length; i++) {
        if (n[i] < smallest) {
            smallest = n[i]
        }
    }
    return smallest
}
console.log(smallestValue([2, 3, 4, 8, 5, 4]))



