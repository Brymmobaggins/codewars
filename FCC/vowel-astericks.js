/**
 * Given a string, reverse the string, replace every vowel with an asterisk (*), and return the result.
 *
 * @format
 */

function reverse(string) {
  let res = "";
  let vowel = new Set("aeiouAEIOU");
  let reverseString = string.split("").reverse().join("");

  for (let char of reverseString) {
    if (vowel.has(char)) {
      res += "*";
    } else {
      res += char;
    }
  }
  return res;
}
console.log(reverse("heloaioworld"));
