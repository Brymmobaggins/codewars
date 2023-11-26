/*DESCRIPTION:
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes. */


function encrypt(string, n) {
    if (string === "" || n <= 0) {
        return string
    }
    let result = ""
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < string.length; j++) {
            // check for even indexed
            if (j % 2 === 0) {
                result += string[j]
            }
        }
        for (let j = 0; j < string.length; j++) {

            // check for odd indexed
            if (j % 2 !== 0) {
                result += string[j]
            }
        }
    }
    return result
}
console.log(encrypt("This is a test!", 1))

function decrypt(encryptedString, n) {
    if (encryptedString === "" || n <= 0) {
        return encryptedString
    }
    let result = ""
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < encryptedString.length; j++) {
            if (j % 2 !== 0) {
                result += encryptedString[j]
            }
        }
        for (let j = 0; j < encryptedString.length; j++) {
            if (j % 2 === 0) {
                result += encryptedString[j]
            }
        }
    }
    return result
}