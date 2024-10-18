function fruits(name, grams, pricePerKg) {
    let kilograms = grams / 1000;
    let totalSum = kilograms * pricePerKg;
    return `I need $${totalSum.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${name}.`;
}

console.log(fruits('orange', 2500, 1.80));