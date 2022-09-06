// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function booleanToWords(booleanValue){
    if (booleanValue === true) {                // condition to check if boolean Value is true
        return "Yes"
    }else if (booleanValue === false){          // or false
        return "No"
    }

}
console.log(booleanToWords(true))           // yes