function calculate(fruit, grams, pricePerKg) {
    let kg = grams /1000;
    let total = pricePerKg * kg;
    console.log(`I need $${total.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`)
}
calculate('apple', 1563, 2.35);