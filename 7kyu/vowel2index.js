/**
 * vowel2index(str)
 * that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
 * E.g:
 *
 * vowel2index('this is my string') == 'th3s 6s my str15ng'
 * vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
 * vowel2index('') == ''
 *
 * @format
 */

// solution
function vowel2index(str) {
  return str.replace(/[aeiou]/gi, (m, i) => i + 1);
}
console.log(vowel2index("hello"));


// alternate solution
function vowel2index(str) {
  //code me
  let result = "";
  let glass = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i += 1) {
    if (glass.includes(str[i].toLowerCase())) {
      result += i + 1;
      continue;
    }
    result += str[i];
  }
  return result;
}
console.log(vowel2index("hwhlpol"))