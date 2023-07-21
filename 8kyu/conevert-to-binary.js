/* Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format. */



function to_binary(int){
    return +int.toString(2)
}
console.log(to_binary(11)) // 1011