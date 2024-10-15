function project(input) {
    const hoursPerProject = 3;
    let architect = input[0];
    let projects = Number(input[1]);
    let neededHours = hoursPerProject * projects

    console.log(`The architect ${architect} will need ${neededHours} hours to complete ${projects} project/s.`)
}
project(["Valentin", 8]);
