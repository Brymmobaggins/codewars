// You will be given an array `a` and a value `x`.All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings.X can be either.

// Return true if the array contains the value, false if not

function checkValue(a, x) {
    for (let i = 0; i < a.length; i++) {      // loop through the array
        if (a.includes(x))                    // check for the values inside the array
            return true
        else
            return false
    }
}
console.log(checkValue([5,7,8], 0))            // false
