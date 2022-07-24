// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// my solution 

function oddOrEven(numbers){
    let sum
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
        if (sum === numbers % 2 == 0){
            return 'even'
        }else if ( sum === numbers % 2 != 0){
            return 'odd'
        }else{
            return sum
        }

    }
    
}
console.log(oddOrEven([2,4,5]))