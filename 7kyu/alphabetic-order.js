/* Your task is very simple.Just write a function that takes an input string of lowercase letters and returns true / false depending on whether the string is in alphabetical order or not.

    Examples(input -> output)
"kata" -> false('a' comes after 'k')
"ant" -> true(all characters are in alphabetical order) */

// first solution
const alphabetic = s => s === s.split('').sort().join('')
// console.log(alphabetic("heloow"))

// second solution
function isOrder(s) {
    for (let i = 1; i < s.length; i++) {
        if (s[i] < s[i - 1]) {
            // If the current character is less than the previous character, the string is not in alphabetical order
            return false;
        }
    }
    return true
}

// If we make it through the loop without finding a pair of characters that are out of order, the string is in alphabetical order

console.log(isOrder("codewars"))
console.log(isOrder("abc"))
console.log(isOrder("bcd"))
