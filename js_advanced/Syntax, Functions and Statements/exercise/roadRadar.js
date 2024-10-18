function roadRadar(args) {
    let speed = Number(args[0]);
    let area = args[1];
    let speedDiff;
    let aboveLimitsType = '';

    const MOTORWAY = 130;
    const INTERSTATE = 90;
    const CITY = 50;
    const RESIDENTIAL = 20;

    if (area === "motorway") {
        speedDiff = speed - MOTORWAY;

    } else if (area === "interstate") {
        speedDiff = speed - INTERSTATE;

    } else if (area === "city") {
        speedDiff = speed - CITY;

    } else if (area === "residential") {
        speedDiff = speed - RESIDENTIAL;
    }

    if (speedDiff > 0 && speedDiff <= 20) {
        aboveLimitsType = "speeding";
    } else if (speedDiff > 20 && speedDiff <= 40) {
        aboveLimitsType = "excessive speeding";
    } else if (speedDiff > 40) {
        aboveLimitsType = "reckless driving";
    }

    console.log(aboveLimitsType)


}

// test cases
roadRadar([40, 'city']);
roadRadar([21, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);


