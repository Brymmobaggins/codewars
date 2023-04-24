/* Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9

for the example given in the return value

[[1,2,3],[2,4,6],[3,6,9]] */




multiplicationTable = function (size) {
    var table = [];
    for (var i = 0; i < size; i++) {
        table[i] = [];
        for (var j = 0; j < size; j++) {
            table[i][j] = (i + 1) * (j + 1);
        }
    }
    return table;
}

console.log(multiplicationTable(4))