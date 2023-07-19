/*Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:*/

// first approach
function capitalize(str) {

    const arr = str.split('')
    let a = ""
    let b = ""
    for (let i = 0; i < arr.length; i++) {
        if (i % 2) {
            //even index
            a += arr[i]
            b += arr[i].toUpperCase()
        } else {
            //odd index
            a += arr[i].toUpperCase()
            b += arr[i]
        }
        return [a, b]
    }
}
console.log(capitalize("abcdef"))

// second approach
const capitalize = s => {
    let arr = s.split('');
    let a = '', b = '';

    for (let i = 0; i < arr.length; i++) {
        if (i % 2) {
            a += arr[i];
            b += arr[i].toUpperCase();
        } else {
            a += arr[i].toUpperCase();
            b += arr[i];
        }
    }

    return [a, b];
};
console.log(capitalize("abcdef"))
