fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Data fetched:', JSON.stringify(data));
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
