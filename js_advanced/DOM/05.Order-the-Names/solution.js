function solve() {
    let alphabeticalItems = document.getElementsByTagName('li');
    const btn = document.querySelector('button');
    const input = document.getElementsByTagName('input')[0];
    console.log(btn);
    console.log(input);
    btn.addEventListener('click', () => {
        const firstLetterOfName = input.value;
        const asciiChar = firstLetterOfName[0].charCodeAt(0);
        if (alphabeticalItems[asciiChar - 97].innerHTML === '') {
            alphabeticalItems[asciiChar - 97].innerHTML = firstLetterOfName
        } else {
            alphabeticalItems[asciiChar - 97].innerHTML += ', ' + firstLetterOfName
        }

    })

}