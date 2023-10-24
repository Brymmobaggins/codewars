/* 

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]*/

function friend(friends) {

    return friends.filter(function (friend) {
        return friend.length === 4
    })
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]))

function friend(friends) {

    let newfriends = []
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4) {
            newfriends.push(friends[i])
        }
    }
    return newfriends
}
console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]))
