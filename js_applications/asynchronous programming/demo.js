// Example of an asynchronous function
async function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Change this to `false` to simulate an error
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Failed to fetch data.");
        }
      }, 1000);
    });
  }
  
  // Using the async function with async/await
  async function runAsyncExample() {
    try {
      console.log("Fetching data...");
      const data = await fetchData(); // Wait for the async function to resolve
      console.log(data);
    } catch (error) {
      console.error(error); // Handle errors
    }
  }
  
  // Using the async function with .then() and .catch()
  function runThenCatchExample() {
    console.log("Fetching data...");
    fetchData()
      .then((data) => {
        console.log(data); // Handle the resolved promise
      })
      .catch((error) => {
        console.error(error); // Handle the rejected promise
      });
  }
  
  // Run examples
  runAsyncExample();
  runThenCatchExample();
  