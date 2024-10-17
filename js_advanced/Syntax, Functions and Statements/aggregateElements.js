function aggregateElements(arr) {
    let elementsSum = 0;
    let InverseSum = 0;
    let concatenateSum = '';

    for (i=0; i < arr.length; i++) {
        elementsSum += arr[i];
        InverseSum += 1 / arr[i];
        concatenateSum += String(arr[i]);
    }
    console.log(elementsSum);
    console.log(InverseSum.toFixed(4));
    console.log(concatenateSum);

}
aggregateElements([1,2,3]);
aggregateElements([2,4,8,16])