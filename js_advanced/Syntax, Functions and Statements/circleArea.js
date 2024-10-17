function calculateCircleArea(argument) {
    if (typeof(argument) == "number") {
       console.log((Math.PI * argument ** 2).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we received a ${typeof(argument)}.`)
    }

}
calculateCircleArea(5);