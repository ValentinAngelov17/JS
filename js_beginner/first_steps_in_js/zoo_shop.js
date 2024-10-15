function calculateSum(value) {
    const dogFood = 2.50;
    const catFood = 4;

    let numberOfDogFood = Number(value[0]);
    let numberOfCatFood = Number(value[1]);

    let summary = (dogFood * numberOfDogFood) + (catFood * numberOfCatFood);
    console.log(summary);
}
calculateSum(["3", "5"])