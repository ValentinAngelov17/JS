function concatenateData(input) {
    let firstName = input[0];
    let lastName = input[1];
    let ageName = Number(input[2]);
    let cityName = input[3];

    console.log(`You are ${firstName} ${lastName}, a ${ageName}-years old person from ${cityName}.`);
}
