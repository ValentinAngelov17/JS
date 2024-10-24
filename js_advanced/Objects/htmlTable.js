function htmlTable(data) {
    let parsedData = data.map(x => JSON.parse(x));

    let createdTable = content => `<table>${content}\n</table>`;
    let createdRow = content => `\n     <tr>${content}\n    </tr>`;
    let createdData = content => `\n        <td>${content}</td>`;

    let result = parsedData.reduce((accRows, row) => {
        let tdForPerson = Object.values(row).reduce((tdAcc, td) => {
            return tdAcc + createdData(td)
        }, '')
        return accRows + createdRow(tdForPerson)

    }, '')

    return createdTable(result)
}

//test case

console.log(htmlTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',

    '{"name":"Teo","position":"Lecturer","salary":1000}',

    '{"name":"Georgi","position":"Lecturer","salary":1000}']))

/* 
<table>
     <tr>
        <td>Pesho</td>
        <td>Promenliva</td>
        <td>100000</td>
    </tr>
     <tr>
        <td>Teo</td>
        <td>Lecturer</td>
        <td>1000</td>
    </tr>
     <tr>
        <td>Georgi</td>
        <td>Lecturer</td>
        <td>1000</td>
    </tr>
</table>
*/