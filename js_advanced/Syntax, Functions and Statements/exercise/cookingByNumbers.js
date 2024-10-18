function Cooking(ars) {
    number = +ars[0];
    for (i = 1; i < ars.length; i++) {
        switch (ars[i]) {
            case "chop":
                number /= 2;
                break;
            case "dice":
                number = number ** (1 / 2);
                break;
            case "spice":
                number += 1;
                break;
            case "bake":
                number *= 3;
                break;
            case "fillet":
                number = number * 0.8;
                break;
        }
        console.log(number);
    }
}

//Cooking(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])
Cooking(['9', 'dice', 'spice', 'chop', 'bake','fillet'])