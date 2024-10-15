function graduate(input) {
    let grades = 0;
    let student = input[0];
    let classes = input.length
    for (num = 1; num < classes; num++) {
        grade = Number(input[num]);
        grades += grade;
    }
    let average = (grades / (classes - 1));
    if (average >= 4 && classes == 13) {
        console.log(`${student} graduated. Average grade: ${average.toFixed(2)}`);

    } else {
        console.log(`${student} has been excluded at ${classes - 2} grade`)
    }
}
graduate(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

