/**
 * When provided with a String, capitalize all vowels
 *
 * For example:
 *
 * Input : "Hello World!"
 *
 * Output : "HEllO WOrld!"
 *
 * Note: Y is not a vowel in this kata.
 *
 * @format
 */

function swap(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let res = "";

  for (let char of str) {
    if (vowels.includes(char)) {
      res += char.toUpperCase();
    } else {
      res += char;
    }
  }
  return res;
}
console.log(swap("Hello World!")); // HEllO WOrld!
