/*In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters. */


const solve = x => {
    let u = string.match(/[A-Z]/g) || []
    let d = string.match(/[a-z]/g) || []
    let n = string.match(/[0-9]/g) || []
    let s = string.match(/[^A-Z0-9]/gi) || []
    return [u.length, d.length, n.length, s.length]
}

console.log(solve("*'&ABCDabcde12345"))
