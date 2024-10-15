function cooking(num, ...list) {
    num = Number(num)
    
    for (const operation of list) {
        let op = String(operation);
        if (op === 'chop') {
            num  = num / 2;
        } else if(op == 'dice') {
            num = Math.sqrt(num);
        } else if(op ==='spice') {
            num++;
        } else if(op==='bake') {
            num *= 3;
        } else {
            num = num * 0.8;
        }
        console.log(num);
    }
}
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')