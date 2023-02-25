// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table(string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50

// solution

function multiTable(number){

    let table = []        // create an empty array
    for(let i = 1; i <= 10; i++){  // loop through the given number
        table.push(`${i} * ${number} = ${i * number}`)  // push the value and product inside the array
    }
    return table.join('\n') // return the table with a newline
}
console.log(multiTable(10)) // 