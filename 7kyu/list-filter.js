// In this kata you will create a function that takes a list of non - negative integers and strings and returns a new list with the strings filtered out.

//  Example
// filter_list([1, 2, 'a', 'b']) == [1, 2]
// filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15]
// filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123]

function filter_list(list) {
    let newList = []                // create a variable that hold the new list to be return
    for (let i = 0; i < list.length; i++) { // loop through the element inside the list
        if (list[i] === list[i].toString()) { // if statement to check if each iteration is a string
            list[i] = ""
        }else{                       
            newList.push(list[i])       // push element inside the `newlist`
        }
    }
    return newList                        // return new list
}
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))