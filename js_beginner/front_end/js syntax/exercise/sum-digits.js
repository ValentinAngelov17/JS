/**
 * 
 * @param {number} input 
 */
function sumDigits(input) {
    input = String(input);
    let result = 0;
    // for(i=0; i<= input.length - 1; i++) {
    //     result += Number(input[i]);

    // }
    // console.log(result)

    input.toString().split('').forEach(char => { result += +char })
    // for (let strNum of input) {
    //     result += +strNum
    // }
    console.log(result)
}
sumDigits(245678);