// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3]

function uniqueInOrder(iterable) {
    let arrOrder = []              // create an empty arr that hold for o result
    for (let i = 0; i < iterable.length; i++) { // loop through the element in string
        if (iterable[i] !== iterable[i + 1]) {  // check if the value of each iteration value is not the same as the next iteration value
            arrOrder.push(iterable[i]) // if true, push each iteration value in our result array
        }
    }
    return arrOrder                 // return our result array

}
console.log(uniqueInOrder('ABBCcAD'))  // ['A', 'B', 'C', 'c', 'A', 'D']


//  alternate solution
function uniqueInOrder(iterable){
    let newArr = []     
    let el
    for(let i = 0; i < iterable.length; i++){
        if(iterable[i] != el){
            newArr.push(el = iterable[i])
        }
    }
    return newArr
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'))
