function solve(...args) {
    const obj = {};

    args.forEach(el => {
        const argType = typeof(el);
        console.log(`${argType}: ${el}`);

        if (!obj.hasOwnProperty(argType)) {
            obj[argType] = 0;
        }
        obj[argType]++;
    })

    Object.entries(obj)
    .sort((a,b) => {
        const [aKey,aValue] = a;
        const [bKey,bValue] = b;

        return bValue - aValue
    })
    .forEach(element => {
        console.log(`${element[0]}: ${element[1]}`)
    });
}

//test case
solve('cat', 42, function () { console.log('Hello world!'); })