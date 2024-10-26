function solution(initialValue) {
    let total = initialValue; 

    return function (addValue) {
        total += addValue;  
        return total;      
    };
}

// Example usage
let add5 = solution(5);

console.log(add5(2)); // Output: 7
console.log(add5(3)); // Output: 10
