/**
 * Distance Conversion:
 *
 * Given a distance in miles as a number, return the string "(miles) miles equals (kilometers) kilometers."
 *
 * Replace "(miles)" with the input number.
 * Replace "(kilometers)" with the input converted to kilometers, rounded to two decimals and always include two decimal places in the value.
 *
 * 1 mile equals 1.60934 kilometers.
 * If the input is 1, use "mile" instead of "miles."
 *
 * If the converted value is exactly 1, use "kilometer" instead of "kilometers.
 *
 * @format
 */

function milesToKilometer(miles) {
    //  convert miles to kilometers
    let kilometer = miles * 1.60934;

    // round to 2 decimal places
    kilometer = Math.round(kilometer * 100) / 100;

    // Check if we should use singular or plural for mile
    let mileLabel;
    if (miles == 1) {
        mileLabel = "mile";
    } else {
        mileLabel = "miles";
    }

    //   Check if we should use singular or plural for kilometers
    let kilometerLabel;
    if (kilometer == 1) {
        kilometerLabel = "kilometer";
    } else {
        kilometerLabel = "kilometers";
    }

    //   return the output
    return `${miles} ${mileLabel} equals ${kilometer.toFixed(2)} ${kilometerLabel}.`
}
console.log(milesToKilometer(0))
