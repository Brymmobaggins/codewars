function positiveInteger(num) {
    let newArray = []
    for (let i = 0; i < num.length; i++) {
        if (num[i] >= 0) {
            newArray.push(num[i])
        }
    }
    return newArray
}
console.log(positiveInteger([0, 1, 2, 3, 4, -14, -2, -2]))