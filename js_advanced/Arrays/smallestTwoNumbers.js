function smallestTwoNumbers(arr) {
    arr.sort(compareNumbers);


    console.log(`${arr[0]} ${arr[1]}`)

    function compareNumbers(a, b) {
        return a - b;
    }

}

//test cases
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);