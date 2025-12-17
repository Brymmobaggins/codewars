/**
 * Temperature Conversion:
 *
 * Given a temperature in Fahrenheit as a number, return the string "(Fahrenheit)°F equals (Celsius)°C."
 *
 * Replace "(Fahrenheit)" with the input number.
 *
 * Replace "(Celsius)" with the input converted to Celsius, rounded to two decimals and always include two decimal places in the value.
 *
 * The formula to convert Fahrenheit to Celsius is: (𝐹𝑎ℎ𝑟𝑒𝑛ℎ𝑒𝑖𝑡−32)×5/9
 *
 * If the input is 32°F, use "degree" instead of "degrees" for Fahrenheit and "Celsius" for the output if it's exactly 0°C.
 *
 * @format
 */

function FahrenheitToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  celsius = Math.round(celsius * 100) / 100;

  let fahrenheitLabel = fahrenheit === 32 ? "degree" : "degrees";
  let celsiusLabel = celsius === 0 ? "Celsius" : "degrees";

  return `${fahrenheit}°F equals ${celsius.toFixed(2)}°${
    celsiusLabel === "Celsius" ? "C" : "C"
  }.`;
}

console.log(FahrenheitToCelsius(32));

function FahrenheitToCelsius(fahrenheit) {
  // convert fahrenheit to celsius
  let celsius = ((fahrenheit - 32) * 5) / 9;
  celsius = Math.round(celsius * 100) / 100;
  // let check for plural and singular for fahrenheit
  let fahrenheitLabel;
  if (fahrenheit === 32) {
    fahrenheitLabel = "degree fahrenheit";
  } else {
    fahrenheit = "degrees fahrenheit";
  }

  // check if singular of plural for Celsius
  let celsiusLabel;
  if (celsius === 0) {
    celsiusLabel = "Celsius";
  }

  //   build and return the result in string
  return `${fahrenheit} ${fahrenheitLabel} equals ${celsius.toFixed(
    2
  )} ${celsiusLabel}.`;
}
console.log(FahrenheitToCelsius(32));
