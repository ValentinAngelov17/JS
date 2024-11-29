function orderRectangles(input) {
    // Function to create a rectangle object
    function createRectangle(width, height) {
        return {
            width,
            height,
            area() {
                return this.width * this.height;
            },
            compareTo(other) {
                // Compare by area first, descending order
                let areaDifference = other.area() - this.area();
                if (areaDifference !== 0) {
                    return areaDifference;
                }
                // If areas are equal, compare by width, descending order
                return other.width - this.width;
            }
        };
    }

    // Create an array of rectangle objects
    let rectangles = input.map(([width, height]) => createRectangle(width, height));

    // Sort the rectangles using the compareTo method
    rectangles.sort((a, b) => a.compareTo(b));

    return rectangles;
}

// Example usage:
console.log(orderRectangles([[10, 5], [5, 12]]));
console.log(orderRectangles([[10, 5], [3, 20], [5, 12]]));
