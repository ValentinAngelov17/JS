const fetchBookData = async () => {
    try {
        const apiKey = 'your_api_key_here'; 
        const query = 'harry potter';
        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.items || data.items.length === 0) {
            console.log('No books found for the given query.');
            return;
        }

        const books = data.items.map(item => {
            const volumeInfo = item.volumeInfo;
            return {
                title: volumeInfo.title,
                authors: volumeInfo.authors || ['Unknown Author'],
                publisher: volumeInfo.publisher || 'Unknown Publisher',
                publishedDate: volumeInfo.publishedDate || 'Unknown Date',
                description: volumeInfo.description ? volumeInfo.description.slice(0, 100) + '...' : 'No Description Available',
                pageCount: volumeInfo.pageCount || 'Unknown Page Count',
                categories: volumeInfo.categories || ['Uncategorized'],
                previewLink: volumeInfo.previewLink || 'No Preview Available'
            };
        });

        console.log('Books found:');
        books.forEach((book, index) => {
            console.log(`${index + 1}. Title: ${book.title}`);
            console.log(`   Authors: ${book.authors.join(', ')}`);
            console.log(`   Publisher: ${book.publisher}`);
            console.log(`   Published Date: ${book.publishedDate}`);
            console.log(`   Description: ${book.description}`);
            console.log(`   Page Count: ${book.pageCount}`);
            console.log(`   Categories: ${book.categories.join(', ')}`);
            console.log(`   Preview Link: ${book.previewLink}`);
            console.log('-------------------------------------------------------');
        });

        return books;
    } catch (error) {
        console.error('Error fetching book data:', error);
    }
};

fetchBookData();
