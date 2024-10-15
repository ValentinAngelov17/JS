function yardGreening(value) {
    const pricePerYard = 7.61
    const discount = 0.18;
    
    let yards = Number(value[0]);
    let sumWithoutDiscount = pricePerYard * yards;
    let discountSum = sumWithoutDiscount * discount;
    let finalSum = sumWithoutDiscount - discountSum;

    console.log(`The final price is: ${finalSum} lv.`);
    console.log(`The discount is: ${discountSum} lv.`)
}
yardGreening(["550"]);