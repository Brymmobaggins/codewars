/*All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals. .*/



function feast(beast, dish) {
    for (let i of beast) {      // loop through arqument
        for (let j of dish) {   // loop the through the second arqument
            if (i[0] === j[0]) {  // if the first value of of the arqument is the same as the second arqument return true else return false
                return true
            } else {
                return false
            }
        }
    }
}
console.log(feast("brown","bear")) // true