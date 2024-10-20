function diagonalSums(matrix) {
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;
    let secondDiagonalIndex = matrix.length - 1

    for (i = 0; i < matrix.length; i++) {
        firstDiagonalSum += matrix[i][i];
        secondDiagonalSum += matrix[i][secondDiagonalIndex]
        secondDiagonalIndex--;
    }

    console.log(`${firstDiagonalSum} ${secondDiagonalSum}`);
}

// test cases
diagonalSums([[20, 40], [10, 60]]);
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);