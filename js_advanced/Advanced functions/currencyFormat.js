function result(currencyFormatter) {
    // Return a function that only takes the 'value' parameter
    return function (value) {
        // Call the currencyFormatter with fixed parameters and the passed 'value'
        return currencyFormatter(",", "$", true, value);
    };
}

// Provided currencyFormatter function
function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) {
        return symbol + ' ' + result;
    } else {
        return result + ' ' + symbol;
    }
}

// test cases
let dollarFormatter = result(currencyFormatter);
console.log(dollarFormatter(5345)); // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709)); // $ 2,71
