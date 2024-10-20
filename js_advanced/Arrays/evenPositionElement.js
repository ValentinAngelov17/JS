function evenPositionElements(arr) {
    let result = [];

    for (i=0; i<= arr.length; i+= 2) {
        result.push(arr[i]);
    }
    console.log(result.join(" "));

}
// test cases 
evenPositionElements(['5', '10', '12']);
evenPositionElements(['5', '10',]);
evenPositionElements(['5', '10', '15', '19']);
