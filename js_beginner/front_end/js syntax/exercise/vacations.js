function vacation(numberofPeople, typeofGroup, day) {
    let total;
    switch (typeofGroup) {
        case `Students`:
            if (day === 'Friday'){
                total = numberofPeople * 8.45;
            } else if (day === 'Saturday') {
                total = numberofPeople * 9.80;
            } else if (day === 'Sunday') {
                total = numberofPeople * 10.46;
            }
            if (numberofPeople >= 30) {
                total = total *0.85;
            }
            break;
        case `Business`:
            if (numberofPeople >= 100) {
                numberofPeople-= 10;
            }
            if (day === 'Friday'){
                total = numberofPeople * 10.9;;
            } else if (day === 'Saturday') {
                total = numberofPeople * 15.6;
            } else if (day === 'Sunday') {
                total = numberofPeople * 16;
            }
            break;
        case `Regular`:
            if (day === 'Friday'){
                total = numberofPeople * 15;
            } else if (day === 'Saturday') {
                total = numberofPeople * 20;
            } else if (day === 'Sunday') {
                total = numberofPeople * 22.5;
            }
            if( numberofPeople >= 10 && numberofPeople <= 20) {
                total = total * 0.95;
            }
            break;
    }
    console.log(`Total price: ${total.toFixed(2)}`)
}
vacation(40,
    "Regular",
    "Saturday"
    )