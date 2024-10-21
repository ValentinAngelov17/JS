function rotateArray(array) {
    let rotations = +array.pop();

    for (let index = 0; index < rotations; index++) {
        let number = array.pop();
        array.unshift(number);

    }

    console.log(array.join(' '));
}

rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);