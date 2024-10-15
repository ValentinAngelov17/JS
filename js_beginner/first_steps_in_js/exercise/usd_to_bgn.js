function convertCurrency(input) {
    const usdToBgn = 1.79549
    let bgn = Number(input[0]);
    let sum = bgn * usdToBgn;

    console.log(sum)
}
convertCurrency(["100"]);