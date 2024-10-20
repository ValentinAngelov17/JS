function processOddNumbers(arr) {
    let result = [];

    for (i = 1; i < arr.length; i+= 2) {
        result.push(arr[i] * 2);

    }
    console.log(result.reverse())
}

//test cases
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);