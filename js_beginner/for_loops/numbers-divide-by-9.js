function numbers(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let sum = "";
    let summ = 0;

    for (let first = n; first <= m; first++) {
        if (first % 9 == 0){
            summ += first;
            sum += `${first} \n`;

        }
    }
    console.log(`The sum: ${summ}`);
    console.log(sum)
}

numbers(["100", "200"]);