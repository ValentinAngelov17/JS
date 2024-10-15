function leapYear(year) {
    let isLeap;
    if (year % 4 == 0 && year % 100 != 0) {
        isLeap = `yes`;
    } else if (year % 400 == 0) {
        isLeap = `yes`;
    } else {
        isLeap = `no`;
    }
    console.log(isLeap);
}
leapYear(2100)