// You probably know the "like" system from Facebook and other pages.People can "like" blog posts, pictures or other items.We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item.It must return the display text as shown in the examples:

// []-- > "no one likes this"
// ["Peter"]-- > "Peter likes this"
// ["Jacob", "Alex"]-- > "Jacob and Alex like this"
// ["Max", "John", "Mark"]-- > "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]-- > "Alex, Jacob and 2 others like this"

function Islikes(names) {
    let user = ""
    let count = 0

    for (let i = 0; i < names.length; i++) {
        if (names[0] == "") {
            user = "no one likes this"
        }
        if (names[0] == names[i]) {
            user = names[0] + " likes this"
        } else if ( names[1] == names[i] ){
            user = names[0] + " and " + names[1] + " like this"
        }else if (names[2] == names[i]){
            user = names[0] + ", " + names[1] + " and " + names[2] + " like this"
        }else if (names[3] == names[i]){
            count += 1
            user = names[0] + ", " + names[1] + " and " + count + " others like this"
        }
    }
    return user

}
console.log(Islikes(["peter", "kola", "Shola", "bola"]))