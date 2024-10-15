function roadRadar(kilometers, road) {
    let roadLimit;
    switch (road) {
        case `motorway`:
            roadLimit = 130;
            break;
        case `interstate`:
            roadLimit= 90;
            break;
        case `city`:
            roadLimit = 50;
            break;
        case 'residential':
            roadLimit = 20;
            break;
    }
    let diff = kilometers - roadLimit;
    let status;
    if (diff > 0 && diff <= 20) {
        status = `speeding`;
    } else if(diff > 20 && diff <= 40){
        status = `excessive speeding`
    } else {
        status = `reckless driving`
    }
    if (kilometers <= roadLimit) {
        console.log(`Driving ${kilometers} km/h in a ${roadLimit} zone`);
    } else {
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${roadLimit} - ${status}`)
    }
}
roadRadar(200, 'motorway')