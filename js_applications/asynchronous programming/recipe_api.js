const fetchRecipeData = async () => {
    try {
        const apiKey = 'your_api_key_here'; // Replace with your actual API key for Spoonacular
        const ingredient = 'chicken';
        const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${encodeURIComponent(ingredient)}&number=5&apiKey=${apiKey}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const recipes = data.map(recipe => ({
            title: recipe.title,
            image: recipe.image,
            usedIngredients: recipe.usedIngredients.map(ing => ing.name).join(', '),
            missedIngredients: recipe.missedIngredients.map(ing => ing.name).join(', '),
        }));

        console.log(`Recipes with ${ingredient}:`);
        recipes.forEach((recipe, index) => {
            console.log(`${index + 1}. ${recipe.title}`);
            console.log(`   Image: ${recipe.image}`);
            console.log(`   Used Ingredients: ${recipe.usedIngredients}`);
            console.log(`   Missing Ingredients: ${recipe.missedIngredients}`);
        });

        return recipes;
    } catch (error) {
        console.error('Error fetching recipe data:', error);
    }
};

fetchRecipeData();