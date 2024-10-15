function cinema(input) {
    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);

    let totalSum = 0;

    if (type == "Premiere") {
        totalSum = (r * c) * 12.00;
    } else if (type == "Normal") {
        totalSum = (r * c) * 7.50;
    } else {
        totalSum = (r * c) * 5.00
    }
    console.log(`${totalSum.toFixed(2)} leva`);
}
cinema(["Discount",
"12",
"30"])


