function getInfo() {
    // Get the value of the input field
    const stopId = document.getElementById('stopId').value;

    // Get references to the DOM elements
    const stopNameElement = document.getElementById('stopName');
    const busesListElement = document.getElementById('buses');

    // Clear previous results
    stopNameElement.textContent = '';
    busesListElement.innerHTML = '';

    // Construct the URL for the API request
    const url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

    // Make the GET request
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Request failed');
            }
            return response.json();
        })
        .then(data => {
            // Display the stop name
            stopNameElement.textContent = data.name;

            // Populate the list of buses
            for (const [busId, time] of Object.entries(data.buses)) {
                const listItem = document.createElement('li');
                listItem.textContent = `Bus ${busId} arrives in ${time} minutes`;
                busesListElement.appendChild(listItem);
            }
        })
        .catch(error => {
            // Handle errors
            stopNameElement.textContent = 'Error';
        });
}