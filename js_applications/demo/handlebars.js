import Handlebars from 'https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js';
const templateSource = `
    <h1>{{title}}</h1>
    <ul>
        {{#each categories}}
        <li>
            <strong>{{category}}</strong>
            <ul>
                {{#each items}}
                <li>{{this}}</li>
                {{/each}}
            </ul>
        </li>
        {{/each}}
    </ul>
`;
const template = Handlebars.compile(templateSource);
const data = {
    title: 'Shopping List',
    categories: [
        { category: 'Fruits', items: ['Apples', 'Oranges', 'Bananas'] },
        { category: 'Vegetables', items: ['Carrots', 'Broccoli', 'Spinach'] }
    ]
};
const htmlOutput = template(data);
document.body.innerHTML = htmlOutput;
