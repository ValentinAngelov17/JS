function extract(array) {
    let biggestNumber = -Infinity;
    let result = []
    for (i = 0; i < array.length; i++) {
        if (array[i] >= biggestNumber) {
            result.push(array[i]);
            biggestNumber = array[i];
        }
    }

    console.log(result.join('\n'));
}
//test cases
extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
