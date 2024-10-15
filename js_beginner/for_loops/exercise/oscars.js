function oscars(input) {
    let name = input[0];
    let points = Number(input[1]);
    let judge = Number(input[2]);
    
    for (n = 3; n <= (judge *2) +1; n+=2) {
        let judgeName = input[n];
        let judgePoints = Number(input[n +1]);
        points += (judgeName.length * judgePoints) / 2;

        if(points >= 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${points.toFixed(1)}!`);
            break;
        }
    

    }
    if (points < 1250.5) {
        console.log(`Sorry, ${name} you need ${(1250.5 - points).toFixed(1)} more!`)
    }

    

}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

