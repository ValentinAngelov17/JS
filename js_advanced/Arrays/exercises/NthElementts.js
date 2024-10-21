function nthElements(arr) {
    let step = Number(arr.pop());

    for (i = 0; i < arr.length; i += step) {
        console.log(arr[i]);
    }

}

// test cases
nthElements(['5', '20', '31', '4', '20', '2']);
nthElements(['dsa', 'asd', 'test', 'tset', '2']);
nthElements(['1', '2', '3', '4', '5', '6']);