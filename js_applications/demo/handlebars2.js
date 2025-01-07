import Handlebars from 'https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js';
const templateSource = `
    <header>
        <h1>{{title}}</h1>
        <p>{{description}}</p>
    </header>
    <main>
        <section>
            <h2>Categories</h2>
            {{#each categories}}
            <article>
                <h3>{{category}}</h3>
                <p>{{categoryDescription}}</p>
                <ul>
                    {{#each items}}
                    <li>{{name}} - Quantity: {{quantity}}, Price: ${{price}}</li>
                    {{/each}}
                </ul>
            </article>
            {{/each}}
        </section>
    </main>
    <footer>
        <p>{{footerText}}</p>
    </footer>
`;
const template = Handlebars.compile(templateSource);
const data = {
    title: 'Shopping List',
    description: 'A categorized and detailed shopping list for the week.',
    categories: [
        {
            category: 'Fruits',
            categoryDescription: 'Fresh and organic fruits.',
            items: [
                { name: 'Apples', quantity: 5, price: 3.5 },
                { name: 'Oranges', quantity: 8, price: 4.0 }
            ]
        },
        {
            category: 'Vegetables',
            categoryDescription: 'Green and healthy vegetables.',
            items: [
                { name: 'Carrots', quantity: 10, price: 2.0 },
                { name: 'Broccoli', quantity: 3, price: 3.0 }
            ]
        }
    ],
    footerText: 'Thank you for using our shopping list!'
};
const htmlOutput = template(data);
document.body.innerHTML = htmlOutput;
