function evenPowers(input) {
    let n = Number(input[0]);
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0) {
            let something = 2 ** i;
            console.log(something)
        }
    }
}
evenPowers(["3"])