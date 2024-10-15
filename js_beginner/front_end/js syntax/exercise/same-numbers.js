function sameNumbers(input) {
    let result = 0;
    input = String(input)
    let same = Number(input[0]);
    let ifSame = true;
    for(i=0; i<= input.length - 1; i++) {
        result += Number(input[i]);
        if (Number(input[i]) !== same) {
            ifSame = false
        }
    };
    console.log(ifSame);
    console.log(result);
}
sameNumbers(1234)