const add = (function test() {
    let sum = 0;

    function add(addEnd) {
        sum += addEnd;

        return add;
    };

    add.toString = function () {
        return sum;
    }

    return add;
})()

console.log(add(1)(3)(4)(10).toString());