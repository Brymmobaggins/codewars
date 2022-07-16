// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples(Input-- > Output)
// "1234"   -- > true
// "12345"  -- > false
// "a234"   -- > false

function validateCode(pin) {
    let pinLength = pin.length                        // variable to get the length of the PIN
    let correctLength = (pinLength == 4 || pinLength == 6)   // get the correct digit for PIN
    let onlyNumbers = pin.match(/^\d+$/)                     // regex to accept or match numbers only

    if (correctLength && onlyNumbers) {                       // check for length and numbers 
                                                                      
        return true
    }else{
        return false
    }

}
console.log(validateCode("5343567"))