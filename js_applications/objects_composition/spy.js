function Spy(target, method) {
    let originalMethod = target[method]; // Store the original method
    let spy = { count: 0 }; // Object to keep track of call count

    // Replace the original method with a wrapped function
    target[method] = function (...args) {
        spy.count++; // Increment the counter whenever the method is called
        return originalMethod.apply(this, args); // Call the original method with its arguments and context
    };

    return spy; // Return the spy object
}

// Example Usage:
let obj = {
    method: () => "invoked"
};

let spy = Spy(obj, "method");

obj.method();
obj.method();
obj.method();

console.log(spy); // { count: 3 }

let consoleSpy = Spy(console, "log");

console.log(consoleSpy); // { count: 1 }
console.log(consoleSpy); // { count: 2 }
console.log
