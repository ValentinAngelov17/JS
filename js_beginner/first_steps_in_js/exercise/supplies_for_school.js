function suppliesForSchool(values) {
    let packagesPencil = Number(values[0]);
    let packagesMarkers = Number(values[1]);
    let cleaningDetergent = Number(values[2]);
    let discount = Number(values[3]);

    let totalSum = (packagesPencil * 5.80) + (packagesMarkers * 7.20) + (cleaningDetergent * 1.20);
    totalSum = totalSum - (totalSum * (discount / 100));
    console.log(totalSum)
}
suppliesForSchool(["2 ",
"3 ",
"4 ",
"25 "]
)