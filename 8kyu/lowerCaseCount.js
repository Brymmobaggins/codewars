/*Your task is simply to count the total number of lowercase letters in a string.

Examples
"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26 */

function lowerCaseCount(str) {

    // str = str.split("")
    let counter = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i]) {
            counter++
        }
    }
    return counter

}
console.log(lowerCaseCount("abcdefghijklmnopqrstuvwxyZ")) // 26



// alternate solution
function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}
console.log(lowerCaseCount("abcABC123")) // 25
