function addOrRemoveElements(arr) {
    let outputArray = [];

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        if (element === "add") {
            outputArray.push(index + 1);
        } else if (element === "remove") {
            outputArray.pop();
        }


    }

    console.log(outputArray.length > 0 ? outputArray.join('\n') : "Empty");
}

// test cases
addOrRemoveElements(['add', 'add', 'add', 'add']);
addOrRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addOrRemoveElements(['remove', 'remove', 'remove']);