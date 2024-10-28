function extractData(input, criteria) {
    let data = JSON.parse(input)
    let criteriaArr = criteria.split('-');

    let formatFunction = function (counter, fName, lName, email) {
        console.log(`${counter}. ${fName} ${lName} - ${email}`)
    }
    let counter = 0;
    data.forEach(element => {

        if (criteria === 'all') {
            formatFunction(counter, element['first_name'], element['last_name'], element['email']);
            counter++;
        }
        else {
            for (const key in element) {
                if (Object.prototype.hasOwnProperty.call(element, key)) {
                    const value = element[key];
                    if (key === criteriaArr[0] && value === criteriaArr[1]) {
                        //console.log(`${element['id']}. ${element['first_name']} ${element['last_name']} - ${element['email']}`)
                        formatFunction(counter, element['first_name'], element['last_name'], element['email']);
                        counter++;


                    }

                }

            }
        }

        


    });

}

extractData(`[{

"id": "1",

"first_name": "Ardine",

"last_name": "Bassam",

"email": "abassam0@cnn.com",

"gender": "Female"

}, {

"id": "2",

"first_name": "Kizzee",

"last_name": "Jost",

"email": "kjost1@forbes.com",

"gender": "Female" 

}, { "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }]`, 'all')

console.log(`\n`)

extractData(`[{

"id": "1",

"first_name": "Kaylee",

"last_name": "Johnson",

"email": "k0@cnn.com",

"gender": "Female"

}, {

"id": "2",

"first_name": "Kizzee",

"last_name": "Johnson",

"email": "kjost1@forbes.com",

"gender": "Female"

}, {

"id": "3",

"first_name": "Evanne",

"last_name": "Maldin",

"email": "emaldin2@hostgator.com",

"gender": "Male"

}, {

"id": "4",

"first_name": "Evanne",

"last_name": "Johnson",

"email": "ev2@hostgator.com",

"gender": "Male"

}]`,

    'last_name-Johnson')