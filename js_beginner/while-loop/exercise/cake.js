function birthdayCake(input) {
    let index = 0;
    let cakeWdigth = Number(input[index]);
    index++;
    let cakeHeight = Number(input[index]);
    index++;
    let cake = cakeHeight * cakeWdigth;
    let command = input[index];
    index++;
    while (command != "STOP") {
        let piesces = Number(command)
        cake -= piesces;
        if (cake <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`)
            break;
        }
        command = input[index]
        index++;
    }
    if (cake >= 0) {
        console.log(`${cake} pieces are left.`)
    }
}
    
birthdayCake(["10",
"2",
"2",
"4",
"6",
"STOP"])

