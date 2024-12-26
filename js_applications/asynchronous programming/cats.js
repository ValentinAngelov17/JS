const fetchCatFacts = async () => {
    try {
        const url = `https://catfact.ninja/fact`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data || !data.fact) {
            console.log('No cat facts found.');
            return;
        }

        console.log('Here is a fun cat fact:');
        console.log(data.fact);

        // Additional logic: saving and categorizing facts
        const factDetails = {
            fact: data.fact,
            length: data.fact.length,
            category: data.fact.includes('kitten') ? 'Kitten Fact' : 'General Cat Fact'
        };

        console.log('Fact Details:');
        console.log(`Fact: ${factDetails.fact}`);
        console.log(`Length: ${factDetails.length} characters`);
        console.log(`Category: ${factDetails.category}`);

        // Simulating storing the fact
        const savedFacts = [];
        savedFacts.push(factDetails);

        console.log('Saved Facts:');
        savedFacts.forEach((fact, index) => {
            console.log(`${index + 1}. ${fact.category}: ${fact.fact}`);
        });

        return factDetails;
    } catch (error) {
        console.error('Error fetching cat fact:', error);
    }
};

fetchCatFacts();
