function biggestElement(arr) {
    let maxNumber = -Infinity;

    for (i = 0; i < arr.length; i++) {
        arr[i].sort(compareNumbers);

        function compareNumbers(a, b) {
            return a - b;
        }

        if (arr[i][arr[i].length - 1] > maxNumber) {
            maxNumber = arr[i][arr[i].length - 1];
        }

    }

    console.log(maxNumber);

}

//test cases

biggestElement([[20, 50, 10],
[8, 33, 145]]);

biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]);