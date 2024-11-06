function deleteByEmail() {
    const inputEmail = document.getElementsByName('email')[0];
    let tableRows = document.getElementsByTagName('tr');
    let resultDiv = document.getElementById('result');
    let isFound = false;
    
    for (let index = 1; index < tableRows.length; index++) {
        const row = tableRows[index];
        let email = row.getElementsByTagName('td')[1];
        
        if (inputEmail.value === email.innerHTML) {
            row.remove();
            isFound = true;
            resultDiv.innerHTML = 'Deleted.'
        }

    }

    if (isFound === false) {
        resultDiv.innerHTML = 'Not found.'
    }


    
}