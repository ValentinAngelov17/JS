function calculateBmi(a, b) {
    let sorter = filter();
    return sorter[b](a);
    function filter() {
        return {
            asc: (s) => s.sort((a, b) => a - b),
            desc: (s) => s.sort((a, b) => b - a)
        }
    }
}

//tests
console.log(calculateBmi([14, 7, 17, 6, 8], 'asc'));
console.log(calculateBmi([14, 7, 17, 6, 8], 'desc'));