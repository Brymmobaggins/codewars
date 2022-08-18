// You get an array of numbers, return the sum of all of the negatives ones.

//  Example[1, -4, -7, 12, -10, -12, 9, 6, 2] 

// Note: if there is nothing to sum, the sum is default to 0.


function sumOfNegative(array){
    let result = 0
    for(let i = 0; i < array.length; i++){  // loop through the array
        if (array[i] < 0){             // if statement to check if item in each iteration is +tive interger
         result += array[i]            // if true, sum of the element an assign it to result
        }
    }
    return result                       // return result
}
console.log(sumOfNegative([-4, -5, 6]))  // -9