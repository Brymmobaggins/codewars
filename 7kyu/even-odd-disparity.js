/*Given an array, return the difference between the count of even numbers and the count of odd numbers. 0 will be considered an even number.

For example:
solve([0,1,2,3]) = 0 because there are two even numbers and two odd numbers. Even - Odd = 2 - 2 = 0.  
Let's now add two letters to the last example:

solve([0,1,2,3,'a','b']) = 0. Again, Even - Odd = 2 - 2 = 0. Ignore letters. 
The input will be an array of lowercase letters and numbers only.

In some languages (Haskell, C++, and others), input will be an array of strings:

solve ["0","1","2","3","a","b"] = 0 */

[0, 15, 'z', 16, 'm', 13, 14, 'c', 9, 10, 13, 'u', 4, 3]

function solve(arr) {
    let oddCount = 0;
    let evenCount = 0

    for (let i = 0; i < arr.length; i++) {

        if (isNaN(arr[i])) {
            continue

        } else if (arr[i] % 2 === 0) {
            //even number
            evenCount++;
        } else {
            //odd number
            oddCount++

        }
    }
    return evenCount - oddCount

}
console.log(solve(["0", "1", "2", "3", "a", "b"]))


// second approach
function solve(a) {
    let odd = 0, even = 0;
    a.map(x => {a
        if (!isNaN(x)) {
            if (x % 2 === 0) {
                even++
            } else {
                odd++
            }
        }
    });
    return even - odd;
};