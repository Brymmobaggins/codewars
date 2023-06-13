/* JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2, 4, 5, 6]) // should == [2,4,6]*/

function getEvenNumbers(numberArrays) {
    const result = numberArrays.filter(n => n % 2 == 0)
    return result

}
console.log(getEvenNumbers([2, 4, 5, 6]))  // [5]
