function heroicInventory(arr) {
    let data = [];
    let currentMatrix = []
    arr.forEach(element => {
        let currentEl = element.split(' / ');
        let items = currentEl[currentEl.length - 1].split(', ');
        currentEl.pop()
        currentEl.push(items)
        currentMatrix.push(currentEl);
    });


    currentMatrix.forEach(element => {
        let object = {
            name: element[0],
            level: Number(element[1]),
            items: element[2]
        }
        data.push(object);
    });

    console.log(JSON.stringify(data));

}

//test case
heroicInventory([
    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'
])