function sortedArray(array) {
    const newArray = array.sort((firstName, secondName) => firstName.length - secondName.length || firstName.localeCompare(secondName));

    console.log(newArray.join('\n'));
}

// test cases
sortedArray(['alpha', 'beta', 'gamma']);
sortedArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortedArray(['test', 'Deny', 'omen', 'Default']);