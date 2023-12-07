/* Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated) */

reverse = function (array) {
    let newArr = []
    for (i in array) {
        newArr.unshift(array[i])
    }
    return newArr
}
console.log(reverse([1, 2, 3, 4, 5])) // [ 5, 4, 3, 2, 1 ]