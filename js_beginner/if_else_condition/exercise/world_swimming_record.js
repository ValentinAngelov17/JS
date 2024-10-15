function swimmingRecord(input) {
    let recordSeconds = Number(input[0]);
    let recordMeters = Number(input[1]);
    let secondPerMeter = Number(input[2]);

    let waterResistance = Math.floor(recordMeters / 15);

    let finalTime = (recordMeters * secondPerMeter) + (12.5 * waterResistance);

    if (finalTime < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`)
    } else {
        let neededTime =(recordSeconds - finalTime) * (-1);
        console.log(`No, he failed! He was ${neededTime.toFixed(2)} seconds slower.`)
    }
};
swimmingRecord(["55555.67",
"3017",
"5.03"])
