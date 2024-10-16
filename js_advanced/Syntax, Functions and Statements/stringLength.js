function solve(arr1, arr2, arr3) {
    let sumLength;
    let averageLength;

    let first = arr1.length;
    let second = arr2.length;
    let third = arr3.length;

    sumLength = first + second + third;
    averageLength = Math.floor(sumLength / 3);
    
    console.log(sumLength);
    console.log(averageLength);

}
solve("chocolate", "ice cream", "cake");