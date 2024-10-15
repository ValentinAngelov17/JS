function multiplication(input) {
    let number = Number(input[0]);
    let result = 0;
    for (i = 1; i <= 10; i++) {
        result = i * number;
        console.log(`${i} * ${number} = ${result}`);
    }
}
multiplication(["5"]);
