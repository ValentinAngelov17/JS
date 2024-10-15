function vacationList(values) {
    let currentPages = Number(values[0]);
    let pagesPerHour = Number(values[1]);
    let daysLeft = Number(values[2]);

    let neededHoursPerDays = (currentPages / pagesPerHour) / daysLeft;

    console.log(neededHoursPerDays);
}
vacationList(["212", "20", "2"]);