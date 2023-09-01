/*You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number. */




// second solution
function ageAge(inputStr){
    // function takes a string as a parameter called inputStr

    // convert first character to a numeric value and return it, which represent the extracted from the input string
    return parseInt(inputStr[0])
}
console.log(ageAge("6 years old"))