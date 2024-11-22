function solve() {
    // Get the input string from the text field
    const inputString = document.getElementById("string").value;

    // Regex patterns
    const passengerNamePattern = /\b([A-Z][a-z]+-[A-Z][a-z]+(?:-[A-Z][a-z]+\.)?)\b/;
    const airportPattern = /\b([A-Z]{3})\/([A-Z]{3})\b/;
    const flightNumberPattern = /\b([A-Z]{1,3}\d{1,5})\b/;
    const companyPattern = /- ([A-Z][a-z]*\*[A-Z][a-z]*)/;

    // Extract matches
    const passengerMatch = passengerNamePattern.exec(inputString);
    const airportMatch = airportPattern.exec(inputString);
    const flightNumberMatch = flightNumberPattern.exec(inputString);
    const companyMatch = companyPattern.exec(inputString);

    // Extract and clean data
    const passengerName = passengerMatch ? passengerMatch[1].replace('-', ' ') : "Unknown Passenger";
    const airportFrom = airportMatch ? airportMatch[1] : "Unknown";
    const airportTo = airportMatch ? airportMatch[2] : "Unknown";
    const flightNumber = flightNumberMatch ? flightNumberMatch[1] : "Unknown";
    const companyName = companyMatch ? companyMatch[1].replace('*', ' ') : "Unknown Airline";

    // Construct the result message
    const resultMessage = `Mr/Ms, ${passengerName}, your flight number ${flightNumber} is from ${airportFrom} to ${airportTo}. Have a nice flight with ${companyName}.`;

    // Display the result in the #result div
    document.getElementById("result").textContent = resultMessage;
}
