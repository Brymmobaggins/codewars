// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

function automorphic(n) {
    let len = n.toString().length
    let num = (n * n).toString().slice(-len)
    return (n == num) ? 'Automorphic' : 'Not!!'
}