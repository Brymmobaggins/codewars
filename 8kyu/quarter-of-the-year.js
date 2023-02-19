// DESCRIPTION:
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2(February), is part of the first quarter; month 6(June), is part of the second quarter; and month 11(November), is part of the fourth quarter.

function monthOftheYear(month) {
    if (month <= 3) {
        return "first Quarter"
    } else if (month <= 6) {
        return "second Quarter"
    } else if (month <= 9) {
        return "third quarter"
    } else if (month <= 12) {
        return "fourth quarter"
    }
}
console.log(monthOftheYear(12)) // fourth quarter
console.log(monthOftheYear(1)) // first quarter
