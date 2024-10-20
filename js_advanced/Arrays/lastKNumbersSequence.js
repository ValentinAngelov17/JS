function generateSequence(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
    
        let start = Math.max(0, i - k);  
        let sum = 0;
        for (let j = start; j < i; j++) {
            sum += sequence[j];
        }

        
        sequence.push(sum);
    }

    
    console.log(sequence.join(' '));
}

//test cases
generateSequence(6, 3);
generateSequence(8, 2);