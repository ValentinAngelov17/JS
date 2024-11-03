function solve() {
    const calculatorDiv = document.querySelector('#calculator');
    const resultInput = document.querySelector('#resultOutput');
    const buttons = document.getElementsByTagName('button');
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let expression = document.querySelector('#expressionOutput');
    let leftNumber = 0;
    let rightNumber = 0;
    let result;


    calculatorDiv.addEventListener('click', (e) => {
        let currentValue = e.target.value
        if (numbers.includes(currentValue) || (currentValue === '.' && expression.innerHTML != '')) {

            expression.innerHTML += currentValue;
        } else if (currentValue === 'Clear') {
            expression.innerHTML = '';
            resultInput.innerHTML = '';
        }

        else {

            if (currentValue === '=') {
                const expressionArray = expression.innerHTML.split(' ');

                let leftNumber = Number(expressionArray[0]);
                let operator = expressionArray[1];
                let rightNumber = Number(expressionArray[2]);
                switch (operator) {
                    case '+':
                        result = leftNumber + rightNumber;
                        break;
                    case '-':
                        result = leftNumber - rightNumber;
                        break;

                    case '*':
                        result = leftNumber * rightNumber;
                        break;
                    case '/':
                        result = leftNumber / rightNumber;
                        break;
                }
                if (expressionArray.length <= 3) {
                    resultInput.innerHTML = 'NaN';
                } else {
                    resultInput.innerHTML = result;
                }



            }
            expression.innerHTML += ' ' + currentValue + ' ';
        }


        if (numbers.includes(e.target.value)) {
            console.log(e.target.value);
        }
    })
    //TODO...
}