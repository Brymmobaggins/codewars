// You get an array of numbers, return the sum of all of the positives ones.

//  Example[1, -4, 7, 12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function sumOfPositive(array){
    let total = 0;
    for (let i = 0; i < array.length; i++) {    // loop through the array
        if(array[i] >= 0){
            total += array[i]                  // sum the numbers greater 0 which are postive numbers
        }
        
    }
    return total                               // Return total
}

console.log(sumOfPositive([4, -34, -5, 2]))    // 6