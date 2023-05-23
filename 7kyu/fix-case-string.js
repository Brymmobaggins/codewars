/*In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.*/


/*solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.*/


function solve(string) {
    let upper = 0   // create a variable for upper Case counter
    let lower = 0   // create a variable for lower Case counter

    for (let i = 0; i < string.length; i++) {       // loop through the string
        if (string[i] == string[i].toUpperCase()) {   // a condition to check if each letter is Upper case letter
            upper++                      // if yes increase upper case counter by 1
        } else {              
            lower++                     // if not increase lower case counter by 1
        }
    }
    // if lower case counter > or == upper case counter ?  convert string to lowercase, else convert string to upper case
    return lower >= upper ? string.toLowerCase(): string.toUpperCase()


}
console.log(solve("CODe")) // CODE
console.log(solve("coDe")) // code
console.log(solve("coDE")) // code
