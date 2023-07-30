/*Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Example:    
5.5589 is rounded 5.56   
3.3424 is rounded 3.34 */
function toTwodecimal(x){
    // covert to number and format it to two decimal place
    return Number(x.toFixed(2))
}
console.log(toTwodecimal(4.565677)) // 4.57