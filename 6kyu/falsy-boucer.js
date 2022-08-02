// Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(array){
    let newArray = []                       // create a new empty array
    for(let i = 0; i < array.length; i++){  // loop through all over the elemen inside the array
        if(array[i]){         // if statement to check if the current element is `truthy` or `falsy`
            newArray.push(array[i])  // if truth or falsy will push element to`newArray`
        }
    }
    return newArray                 // return `newArray`
}
console.log(bouncer([7, "bean", "", false, 10, undefined, NaN, 0]))   // [ 7, 'bean', 10 ]