function sumVowels(input) {
    let word = input[0];
    let sum = 0;

    for (index = 0; index < word.length; index++) {
        switch (word[index]) {
            case "a":
                sum += 1;
                break;
            case "e":
                sum += 2;
                break;
            case "i":
                sum += 3;
                break;
            case "o":
                sum += 4;
                break;
            case "u":
                sum += 5;
                break;
        
        }
    }
    console.log(sum)
}
sumVowels(["rapatartapa"]);