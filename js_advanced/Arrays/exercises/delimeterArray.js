function delimiterArray(arr) {
    let delimiter = arr.pop();
    return arr.join(delimiter);
}

//test cases
console.log(delimiterArray(['One', 'Two', 'Three', 'Four', 'Five', '-']));

console.log(delimiterArray(['How about no?', 'I', 'will', 'not', 'do', 'it!', '_']));