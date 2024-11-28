function getFibonator() {
    // Initialize the first two Fibonacci numbers
    let prev = 0;
    let curr = 1;

    // Return a function that calculates the next Fibonacci number
    return function () {
        let next = prev + curr; // Calculate the next Fibonacci number
        prev = curr; // Update the previous number
        curr = next; // Update the current number
        return prev; // Return the new Fibonacci number
    };
}

// Sample execution
let fib = getFibonator();

console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
