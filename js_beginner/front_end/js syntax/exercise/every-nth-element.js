function solve(list, steps) {
    let result = [];
    for(i=0; i<= list.length; i +=steps) {
        result.push(list[i]);
    }
    console.log(result)
}

solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)