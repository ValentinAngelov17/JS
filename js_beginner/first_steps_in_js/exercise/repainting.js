function repainting(values) {
    const nylon = 1.50;
    const paint = 14.50;
    const paintThinner = 5.00;
    
    let neededNylon = Number(values[0]) + 2;
    let neededPaint = Number(values[1]) * 1.1;
    let neededPaintThinner = Number(values[2]);
    let neededHours = Number(values[3]);

    let materialsSum = (neededNylon * nylon) + (neededPaint * paint) + (neededPaintThinner * paintThinner) + 0.40;
    let totalSum = (materialsSum * 0.3) * neededHours;
    totalSum += materialsSum;

    console.log(totalSum);
}
repainting(["10 ",
"11 ",
"4 ",
"8 "]
)