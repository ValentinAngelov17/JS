function stepGoals(input) {
    let goal = 10000;
    let currentSteps = 0;
    let counter = 0;
    while(true) {
        if (counter == input.length) {
            break;
        }
        if (input[counter] === "Going home") {
            currentSteps += Number(input[counter + 1]);
            break;
        } else {
            currentSteps += Number(input[counter]);
        }
        counter++;

    }
    if (currentSteps >= goal) {
        let move = currentSteps - goal;
        console.log(`Goal reached! Good job!`)
        console.log(`${move} steps over the goal!`)
    } else {
        let move = goal - currentSteps;
        console.log(`${move} more steps to reach goal.`)
    }
}
stepGoals(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])


