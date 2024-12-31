const firebaseUrl = "https://test-af869-default-rtdb.europe-west1.firebasedatabase.app/.json";

// Fetch data from Firebase
fetch(firebaseUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // Parse the JSON data
  })
  .then(data => {
    // Log all key-value pairs
    console.log("Logging all key-value pairs:");
    logKeyValuePairs(data);
  })
  .catch(error => {
    console.error("Error fetching data from Firebase:", error);
  });

// Function to recursively log key-value pairs
function logKeyValuePairs(obj, parentKey = "") {
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = parentKey ? `${parentKey}.${key}` : key; // Build the full key path
    if (typeof value === "object" && value !== null) {
      // Recursively handle nested objects
      logKeyValuePairs(value, fullKey);
    } else {
      // Log key-value pair
      console.log(`${fullKey}:`, value);
    }
  }
}
