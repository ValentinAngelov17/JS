function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let typeVacation = "";
    let spend = 0;

    if(budget > 1000) {
        destination = "Europe";
        spend = budget * 0.9;
        typeVacation = "Hotel"
    }


    if (season == "summer") {
        typeVacation = "Camp"
        if (budget <= 100) {
            spend = budget * 0.3;
            destination = "Bulgaria";
        } else if (budget <= 1000) {
            spend = budget * 0.4;
            destination = "Balkans";
        }
    } else {
        typeVacation = "Hotel";
        if (budget <= 100) {
            spend = budget * 0.7;
            destination = "Bulgaria";
        } else if(budget <= 1000) {
            spend = budget * 0.8;
            destination = "Balkans";
        }
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${typeVacation} - ${spend.toFixed(2)}`);

}
journey(["1500", "summer"])