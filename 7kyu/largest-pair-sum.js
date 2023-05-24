/* Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19]-- > 42(= 23 + 19)
[99, 2, 2, 23, 19]-- > 122(= 99 + 23)*/


function largestPairSum(numbers) {

    numbers.sort(function (a, b) {
        return b - a;
    })
    return numbers[0] + numbers[1]
}
console.log(largestPairSum([2, 3, 4, 5, 6])) // 11