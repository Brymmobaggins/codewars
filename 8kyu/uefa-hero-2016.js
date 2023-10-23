/*DESCRIPTION:
Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw." */

function uefaEuro2016(country, score) {

    //  the template literals insert the country and score variables into string.
    if (score[0] > score[1]) {
        return `At match ${country[0]} - ${country[1]}, ${country[0]} won!`
    } else if (score[0] < score[1]) {
        return `At match ${country[0]} - ${country[1]}, ${country[1]} won!`
    } else {
        return `At match ${country[0]} - ${country[1]}, teams played draw.`
    }
}
console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]))