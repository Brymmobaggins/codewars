/**
 * The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!
 *
 * Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.
 *
 * Given a string of binary, return the version the photocopier gives you as a string.
 *
 * @format
 */

function broken(string) {
  let res = "";
  for (let x of string) {
    if (x === "0") {
      res += "1";
    } else {
      res += "0";
  }
  return res;
}
console.log(broken("0011"));
