/*You get any card as an argument.Your task is to return the suit of this card(in lowercase).

Our deck(is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/

function defineSuit(card) {

    let cards = card.toLowerCase()
    if (cards.includes("♣")) {
        return 'clubs'
    } else if (cards.includes("♦")) {
        return 'diamonds'
    } else if (cards.includes("♥")) {
        return 'hearts'
    } else if (cards.includes("♠")) {
        return 'spades'
    }
}
console.log(defineSuit("3♠"))

