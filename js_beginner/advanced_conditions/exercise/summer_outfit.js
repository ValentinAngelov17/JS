function summer(input) {
    let degrees = Number(input[0]);
    let time = input[1];
    let outfit = "";
    let shoes = "";

    if (time == "Morning") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "Shirt"
            shoes = "Moccasins";
        } else {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (time == "Afternoon") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "T-Shirt"
            shoes = "Sandals";
        } else {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    } else {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "Shirt"
            shoes = "Moccasins";
        } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}
summer(["28",
"Evening"])


