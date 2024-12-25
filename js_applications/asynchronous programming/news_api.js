const fetchNewsData = async () => {
    try {
        const apiKey = 'your_api_key_here'; // Replace with your actual API key for NewsAPI
        const query = 'technology';
        const pageSize = 10;
        const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&pageSize=${pageSize}&apiKey=${apiKey}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.articles.length === 0) {
            console.log('No news articles found for the given query.');
            return;
        }

        const articles = data.articles.map(article => ({
            title: article.title,
            author: article.author || 'Unknown Author',
            source: article.source.name,
            description: article.description || 'No description available.',
            publishedAt: new Date(article.publishedAt).toLocaleString(),
            url: article.url,
            imageUrl: article.urlToImage || 'No image available.'
        }));

        console.log(`Top ${pageSize} news articles about ${query}:`);
        articles.forEach((article, index) => {
            console.log(`${index + 1}. ${article.title}`);
            console.log(`   Author: ${article.author}`);
            console.log(`   Source: ${article.source}`);
            console.log(`   Description: ${article.description}`);
            console.log(`   Published At: ${article.publishedAt}`);
            console.log(`   URL: ${article.url}`);
            console.log(`   Image: ${article.imageUrl}`);
            console.log('-------------------------------------------------------');
        });

        const articleSummaries = articles.map((article, index) => `
            ${index + 1}. ${article.title} by ${article.author}
            Published by ${article.source} on ${article.publishedAt}
        `);

        console.log('Summarized Articles:');
        articleSummaries.forEach(summary => console.log(summary));

        return articles;
    } catch (error) {
        console.error('Error fetching news data:', error);
    }
};

fetchNewsData();
