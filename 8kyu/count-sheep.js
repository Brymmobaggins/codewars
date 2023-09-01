/*If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers. */

function countSheep(num) {
    // initialize an empty string
    let str = ""
   
    // loop through the parameter and concatenate the loop cunter and `sheep..`
    for (let i = 1; i <= num; i++) {
        str += `${i} sheep...`
    }
    // return concatenates string
    return str

}
console.log(countSheep(3))