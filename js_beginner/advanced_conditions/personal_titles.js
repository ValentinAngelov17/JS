function personalTitles(input) {
    let age = Number(input[0]);
    let sex = input[1];

    if (age < 16) {
        if (sex == "m") {
            console.log("Master");
        } else {
            console.log("Miss");
        }
    } else{
        if (sex == "m") {
            console.log("Mr.");
        } else {
            console.log("Ms.");
        }
    }
}
personalTitles(["12",
"f"])
