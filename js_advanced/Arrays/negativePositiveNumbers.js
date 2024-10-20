function negativeAndPositiveNumbers(arr) {
    let result = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            result.push(arr[i]);
        } else {
            result.unshift(arr[i]);
        }
        
    }
    console.log(result.join('\r\n'));
    console.log('')
}
// test cases
negativeAndPositiveNumbers([7, -2, 8, 9]);
negativeAndPositiveNumbers([3, -2, 0, -1]);