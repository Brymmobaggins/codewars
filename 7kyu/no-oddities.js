/*Write a small function that returns the values of an array that are not odd.

All values in the array will be integers.Return the good values in the order they are given.*/

function noOdd(values){

    let newValue = []
    let i = 0
    while (i < values.length) {
        i++
        if(values[i] % 2 == 0){
            newValue.push(values[i])
        }
    }
    return newValue
}
console.log(noOdd([0,2,4,5,6,7,8]))