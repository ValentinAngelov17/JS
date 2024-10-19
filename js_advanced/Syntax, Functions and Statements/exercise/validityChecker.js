function isValidDistance(x1, y1, x2, y2) {
    // Calculate the distance squared to avoid floating point issues
    const distanceSquared = (x2 - x1) ** 2 + (y2 - y1) ** 2;
    return Number.isInteger(Math.sqrt(distanceSquared));
}

function checkDistances(points) {
    const [x1, y1, x2, y2] = points;

    // Check distance from (x1, y1) to (0, 0)
    if (isValidDistance(x1, y1, 0, 0)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    // Check distance from (x2, y2) to (0, 0)
    if (isValidDistance(x2, y2, 0, 0)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    // Check distance from (x1, y1) to (x2, y2)
    if (isValidDistance(x1, y1, x2, y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

// Example input
const points = [3, 0, 0, 4];
checkDistances(points);
