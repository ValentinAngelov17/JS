const fetchModifiedData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const modifiedData = data.map(post => ({
            ...post,
            title: post.title.toUpperCase(),
            summary: post.body.slice(0, 50) + '...'
        }));

        console.log('Modified Data:', modifiedData);

        return modifiedData;
    } catch (error) {
        console.error('Error fetching or modifying data:', error);
    }
};

fetchModifiedData();
