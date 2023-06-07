/*Create a function that converts US dollars(USD) to Chinese Yuan(CNY).The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

Examples(Input -> Output)
15 -> '101.25 Chinese Yuan'
465 -> '3138.75 Chinese Yuan'
The conversion rate you should use is 6.75 CNY for every 1 USD.All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21") */

function usdToCny(usd) {
    let cny = usd * 6.75;      // create varibe that would return the value yen * usd
    return cny.toFixed(2) + ' Chinese Yuan';  // return the output in 2 decimal place and join the string
}
console.log(usdToCny(15));