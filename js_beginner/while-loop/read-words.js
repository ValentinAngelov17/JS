function readWords(input) {
    let index = 0;
    while (index <= input.length) {
        if (input[index] == "Stop") {
            break;
        }
        console.log(input[index]);
        index++;
    }
}
readWords(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])

