function timePlus15(input) {
    let hours = Number(input[0]);
    let seconds = Number(input[1]) + 15;
    if (seconds >= 60) {
        seconds = seconds % 60;
        hours += 1;
    }

    if (hours >= 24) {
        hours = hours % 24;

    }

    if (seconds < 10) {
        console.log(`${hours}:0${seconds}`);
    } else {
        console.log(`${hours}:${seconds}`);
    }


}
timePlus15(["12", "49"]);
