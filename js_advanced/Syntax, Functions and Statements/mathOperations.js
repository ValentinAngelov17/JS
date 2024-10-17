function solve(arr1, arr2, operator) {
    arr1 = Number(arr1);
    arr2 = Number(arr2);
    let result;

    switch (operator) {
        case "+": 
        result = arr1 + arr2
        break;

        case "-":
            result = arr1 - arr2
            break;

        case "*":
            result = arr1 * arr2
            break;

        case "/":
            result = arr1 / arr2
            break;
    }
    console.log(result)
}
/* tests */
solve(1,8, "-")
solve(1,8, "+")
solve(1,8, "*")
solve(1,8, "/")