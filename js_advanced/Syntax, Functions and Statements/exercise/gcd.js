function gcd(a, b) {
    let copyA = a;
    let copyB = b;

    while (copyB !== 0) {
        let temp = copyA % copyB;
        copyA = copyB;
        copyB = temp;
    }
    return copyA;
}
console.log(gcd(14, 10))