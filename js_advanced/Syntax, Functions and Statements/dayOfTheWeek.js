function dayOfTheWeek(arg) {
    switch (arg) {
        case "Monday" :
            return 1;
        case "Tuesday" :
            return 2;
        case "Wednesday" :
            return 3;
        case "Thursday" :
            return 4;
        case "Friday" :
            return 5;
        case "Saturday" :
            return 6;
        case "Sunday" :
            return 7;
        default:
            return "error";
    }
}
/*test cases*/
console.log(dayOfTheWeek("Mondaay"));
console.log(dayOfTheWeek("Monday"));
console.log(dayOfTheWeek("Tuesday"));
console.log(dayOfTheWeek("Friday"));