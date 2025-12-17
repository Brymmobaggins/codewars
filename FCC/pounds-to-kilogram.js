/*Given a weight in pounds as a number, return the string "(lbs) pounds equals (kgs) kilograms.".

Replace "(lbs)" with the input number.
Replace "(kgs)" with the input converted to kilograms, rounded to two decimals and always include two decimal places in the value.
1 pound equals 0.453592 kilograms.
If the input is 1, use "pound" instead of "pounds".
If the converted value is 1, use "kilogram" instead of "kilograms"*/


function poundsToKilograms(lbs) {
    // Convert pounds to kilograms
    let kgs = lbs * 0.453592;
    // Round to 2 decimal places
    kgs = Math.round(kgs * 100) / 100;
    
    // Check if we should use singular or plural for pounds
    let poundLabel;
    if (lbs === 1) {
        poundLabel = 'pound';
    } else {
        poundLabel = 'pounds';
    }
    
    // Check if we should use singular or plural for kilograms
    let kilogramLabel;
    if (kgs === 1) {
        kilogramLabel = 'kilogram';
    } else {
        kilogramLabel = 'kilograms';
    }
    
    // Build and return the result string
    return lbs + ' ' + poundLabel + ' equals ' + kgs.toFixed(2) + ' ' + kilogramLabel + '.';
}
