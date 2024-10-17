function squareOfStars(size) {
    
    for (i=0; i < size; i++) {
        let result = "*";
        for (j=0; j< size-1; j++) {
            result += " *";
        }
        console.log(result);
    }
    
}
squareOfStars(5)