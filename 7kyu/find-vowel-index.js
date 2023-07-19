/*We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)*/


// first solution
function vowelIndices(word) {
  let arr = []
  for (let i = 0; i < word.length; i++) {
    if (/[aeioyu]/i.test(word[i])) {
      arr.push(i + 1)

    }
  }
  return arr

}
console.log(vowelIndices("super"))


// second solution
function vowel(word) {
  let arr = []       // create a new array
  let vowelLetter = ['a', 'e', 'i', 'o', 'u', 'y'] // create a variable and assigned vowel letter to it
  for (let i = 0; i < word.length; i++) {  // loop through the word(input)
    if (vowelLetter.includes(word[i])) {  // condition to check if value of word(input) includes in array of vowel
      arr.push(i + 1)                  // if true, push the index value into `arr`
    }
  }
  return arr                          // return arr  
}
console.log(vowel("Apple"))          //  [1,5]