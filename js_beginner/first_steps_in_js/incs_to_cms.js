function convertInches(input) {
    const convert = 2.54
    let inches = Number(input[0]);
    let centimeters = inches * convert;
    console.log(centimeters)
}
convertInches(["5"]);