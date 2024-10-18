function sameNumbers(numbers) {
    let digitsList = numbers.toString().split('');
    let allTrue = true;
    let sum = 0;
    for (let i = 0; i <= digitsList.length; i++) {
        if (allTrue) {
            allTrue = digitsList[i] === digitsList[0]
        }
        sum = sum + +digitsList[i];
    }

    console.log(allTrue);
    console.log(sum);
    
}