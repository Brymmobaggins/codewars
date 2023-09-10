/*Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

Notes
If the array is null/nil/None or empty you should return empty array ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned array should be in lowercase.*/


//  first solution
function removeRotten(bagsOfFruits) {
    let freshFruits = [];

    // if (bagsOfFruits === "") return ""
    for (let i = 0; i < bagsOfFruits.length; i++) {
        if (!bagsOfFruits[i].includes("rotten")) {
            freshFruits.push(bagsOfFruits[i])
        } else {
            freshFruits.push(bagsOfFruits[i].toLowerCase().slice(6))

        }
    }
    return bagsOfFruits ? freshFruits : []
};
console.log(removeRotten([]))

// function removeRotten(bagsOfFruits) {
//     return bagsOfFruits?.filter((fruit) => !fruit.toLowerCase().includes('rotten')) || [];
// };

// second solution
function removeRotten(arr) {
    return arr ? arr.map(x => x.replace('rotten', '').toLowerCase()) : [];
}
console.log(removeRotten(["apple", "rottenBanana", "rottenGrape", "rottenBean", "apple"]))


