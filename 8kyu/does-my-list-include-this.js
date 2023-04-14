
// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item){

    return arr.includes(item)? true : false
}
console.log(include([1,2,3,5], 0)) // false