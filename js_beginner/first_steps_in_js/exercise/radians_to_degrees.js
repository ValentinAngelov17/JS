function radiansToDegrees(value) {
    let radians = Number(value[0]);

    let degrees = radians * 180 / Math.PI;

    console.log(degrees);
}
radiansToDegrees(["3.1416"]);
