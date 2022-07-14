// You get an array of numbers, return the sum of all of the negatives ones.

//  Example[1, -4, -7, 12, -10, -12, 9, 6, 2] 

// Note: if there is nothing to sum, the sum is default to 0.


function sumOfNegative(array){
    let result = 0
    for(let i = 0; i < array.length; i++){    // loop through the array
        if (array[i] < 0){
         result += array[i]                  // sum of the number less than zero
        }
    }
    return result                          // the total
}
console.log(sumOfNegative([-4, -5, 6]))