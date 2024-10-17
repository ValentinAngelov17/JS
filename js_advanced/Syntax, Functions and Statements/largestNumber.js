function largestNumber(num1, num2, num3) {
    let sortedArray = [num1, num2, num3].sort();
    let arrayLength = sortedArray.length;
    console.log(`The largest number is ${sortedArray[arrayLength - 1]}`);

}
largestNumber(1,2,3);