function figureArea (input) {
    let figure = input[0];
    let area = 0;
    if (figure == "square") {
        let a = Number(input[1]);
        area = a * a

    } else if (figure == "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = a * b
    } else if (figure == "circle") {
        let radius = Number(input[1]);
        area = Math.PI * radius **2

    } else if (figure == "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        area = (a * h) / 2 
    }
    area = area.toFixed(3);
    console.log(area)
}
figureArea(["triangle",
"4.5",
"20"])
/* 
figureArea(["circle",
"6"])

figureArea(["rectangle",
"7",
"2.5"])

figureArea(["square", "5"])*/