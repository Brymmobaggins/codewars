// Consider an array / list of sheep where some sheep may be missing from their place.We need a function that counts the number of sheep present in the array(true means present).

// function countSheep(arrayOfSheep) {
//     let sumOfSheep = 0
//     for (let i = 0; i < arrayOfSheep.length; i++) {
//         if (arrayOfSheep[i] == true) {
//             sumOfSheep += arrayOfSheep[i]
//         }
//     }
//     return sumOfSheep
// }
// console.log(countSheep([true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true]))


// second Solution
function countSheep(arrayOfSheep) {
    let countOfSheep = 0
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] == true) {
            countOfSheep++
        }
    }
    return sumOfSheep
}
console.log(countSheep([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]))
