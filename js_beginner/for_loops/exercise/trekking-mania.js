function trekking(input) {
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeople = 0;
    let numberOfGroups = Number(input[0]);
    for (i = 1; i <= numberOfGroups; i++) {
        let numberOfPeople = Number(input[i]);
        totalPeople += numberOfPeople
        if (numberOfPeople <= 5) {
            musala+= numberOfPeople;
        } else if (numberOfPeople > 5 && numberOfPeople <= 12) {
            monblan+= numberOfPeople;
        } else if (numberOfPeople > 12 && numberOfPeople <= 25) {
            kilimandjaro+= numberOfPeople;
        } else if (numberOfPeople > 25 && numberOfPeople <= 40) {
            k2+= numberOfPeople;
        } else if (numberOfPeople > 40) {
            everest+= numberOfPeople; 
        } 
    }
    console.log(`${(musala / totalPeople * 100).toFixed(2)}%`)
    console.log(`${(monblan / totalPeople * 100).toFixed(2)}`)
    console.log(`${kilimandjaro / totalPeople * 100}`)
    console.log(`${k2 / totalPeople * 100}`)
    console.log(`${everest / totalPeople * 100}`)
    
}
trekking(["5",
"25",
"41",
"31",
"250",
"6"])

