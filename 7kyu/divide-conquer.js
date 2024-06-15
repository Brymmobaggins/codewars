/* Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number. */

function divder(arr) {

    let nonStringSum = 0
    let stringSum = 0

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === "number") {
            nonStringSum += arr[i]
        } else if (typeof (arr[i]) === "string") {
            stringSum += parseFloat(arr[i])

        }
    }
    return nonStringSum - stringSum

}
console.log(divder([1, 3, 4, "20", "10"]))