function sumRange(arr, start, end) {
    // Check if the first argument is an array
    if (!Array.isArray(arr)) {
        return NaN;
    }
    
    // Adjust the start index if it's less than zero
    start = Math.max(0, start);

    // Adjust the end index if it's out of bounds
    end = Math.min(arr.length - 1, end);

    // Initialize the sum
    let sum = 0;

    // Loop through the range from start to end (inclusive)
    for (let i = start; i <= end; i++) {
        let num = Number(arr[i]);
        
        // If the current element is not a valid number, return NaN
        if (isNaN(num)) {
            return NaN;
        }
        
        sum += num;
    }

    return sum;
}

// Test cases
console.log(sumRange([10, 20, 30, 40, 50, 60], 3, 300));  // Output: 150
console.log(sumRange([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));  // Output: 3.3
console.log(sumRange([10, 'twenty', 30, 40], 0, 2));      // Output: NaN
console.log(sumRange([], 1, 2));                         // Output: 0
console.log(sumRange('text', 0, 2));                     // Output: NaN
