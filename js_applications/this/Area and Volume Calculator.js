
function solve(area, vol, input) {
    // Parse the input string into an array of objects
    const figures = JSON.parse(input);

    // Map each figure to an object with area and volume properties
    return figures.map(figure => ({
        area: area.call(figure),
        volume: vol.call(figure)
    }));
}

console.log(solve(
    function area() { return this.x * this.y; },
    function vol() { return this.x * this.y * this.z; },
    '[{"x":"10","y":"-22","z":"10"},{"x":"47","y":"7","z":"-5"},{"x":"55","y":"8","z":"0"},{"x":"100","y":"100","z":"100"},{"x":"55","y":"80","z":"250"}]'
));