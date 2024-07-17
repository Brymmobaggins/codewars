/**
 * Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.
 *
 * Ex:
 *
 * 274 -> '2-7-4'
 * 6815 -> '68-1-5'
 *
 * @format
 */

function dashatize(num) {
  if (isNaN(num)) {
    return "NaN";
  }

  let result = "";
  num = Math.abs(num).toString();

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      if (i === 0) {
        result += num[i] + "-";
      } else if (i === num.length - 1) {
        result += "-" + num[i];
      } else {
        result += "-" + num[i] + "-";
      }
    } else {
      result += num[i];
    }
  }

  // Replace any multiple dashes with a single dash and trim leading/trailing dashes
  return result.replace(/--+/g, "-").replace(/^-|-$/g, "");
}
console.log(dashatize("c"));
