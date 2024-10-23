function sumByTown(arr) {
    let objects = {};

    for (let index = 0; index < arr.length - 1; index += 2) {
        const town = arr[index];
        const value = Number(arr[index + 1]);

        if (objects.hasOwnProperty(town)) {
            objects[town] += value;
        } else {
            objects[town] = value;
        }

    }

    console.log(JSON.stringify(objects));
}

sumByTown([
    'Sofia',

    '20',

    'Varna',

    '3',

    'Sofia',

    '5',

    'Varna',

    '4'
]);


sumByTown([
    'Sofia',

    '20',

    'Varna',

    '3',

    'sofia',

    '5',

    'varna',

    '4'
]);