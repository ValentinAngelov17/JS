function diagonalAttack(matrix) {
    let arr = [];
    

    matrix.forEach(element => {
        let row = element.split(' ')
        const map1 = row.map((x) => Number(x));
        arr.push(map1);

    });

    let falseMatrix = [];
    for (i = 0; i < arr.length; i++) {
        const currentArr = Array(arr.length).fill(0, 0, arr.length);
        falseMatrix.push(currentArr);
    }


    let leftToRightDiagonalSum = 0;
    let rightToLeftDiagonalSum = 0;
    let rightIndex = arr.length - 1;

    for (i = 0; i < arr.length; i++) {
        leftToRightDiagonalSum += arr[i][i];
        rightToLeftDiagonalSum += arr[i][rightIndex];

        falseMatrix[i][i] = arr[i][i]
        falseMatrix[i][rightIndex] = arr[i][rightIndex]
        rightIndex--;

    }


    if (leftToRightDiagonalSum == rightToLeftDiagonalSum) {
        falseMatrix.forEach(element => {
            console.log(element.join(" ").replaceAll("0", leftToRightDiagonalSum.toString()))
        });
    } else {
        arr.forEach(element => {
            console.log(element.join(" "))
        });
    }

}


// test cases
diagonalAttack([
    '5 3 12 3 1',

    '11 4 23 2 5',

    '101 12 3 21 10',

    '1 4 5 2 2',

    '5 22 33 11 1'
])

diagonalAttack(['1 1 1', '1 1 1' ,'1 1 0'])