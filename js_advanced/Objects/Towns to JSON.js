function dataMapping(arr) {
    let data = [];
    for (let index = 1; index < arr.length; index++) {
        const element = arr[index].split('|');
        element.pop();
        element.shift();
        let dataElement = [];
        element.forEach(el => {
            dataElement.push(el.trim());
        });
        data.push(dataElement);

    }
    return data;
}

let objectsList = [];
let objectsData = dataMapping(['| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',

    '| Beijing | 39.913818 | 116.363625 |'])

objectsData.forEach(element => {
    let townData = {
        Town: element[0],
        Latitude: Number(element[1]).toFixed(2),
        Longitude: Number(element[2]).toFixed(2)
    }
    objectsList.push(townData);
});

console.log(JSON.stringify(objectsList));

