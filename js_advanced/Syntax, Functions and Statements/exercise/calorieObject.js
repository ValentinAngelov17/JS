function calorieObject(args) {
    let result = {};
    for (i = 0; i < args.length; i += 2) {
        result[args[i]] = Number(args[i + 1]);
    }
    console.log(result);

}

calorieObject(['Yoghurt', '48', 'Rise', '138',

    'Apple', '52'])