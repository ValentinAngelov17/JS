function printSum(m, n) {
    let result = 0;
    let stringResult = ``
    for (i=m; i<=n; i++) {
        result += i;
        stringResult+= i + ' ';
    }
    console.log(stringResult);
    console.log(`Sum: ${result}`);

}
printSum(5, 10)