/*Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.*/

function isSortedAndHow(array) {

    for (let i = 1; i < array.length; i++) {

        if (array[i] >= array[i - 1]) {
            return "yes, aescending"
        } else if (array[i] <= array[i - 1]) {
            return "yes, descending"
        } else {
            return "no"
        }
    }
}
// console.log(isSortedAndHow([1, 3, 5, 10, 2])) // no
// console.log(isSortedAndHow([10, 20,30])) // yes, asecending
console.log(isSortedAndHow([50, 20, 10]))  // yes, descending


// solution 2
function isSortedAndHow(arr) {
    if (arr.join('') === arr.slice().sort((a, b) => a - b).join('')) {
        return "yes, ascending";
    } else if (arr.join('') === arr.slice().sort((a, b) => b - a).join('')) {
        return "yes, descending";
    } else {
        return "no";
    }
}
console.log(isSortedAndHow([1, 3, 5, 10, 2])) // no
