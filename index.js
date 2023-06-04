// Function to fetch recipe data from the API
function fetchRecipes() {
    const apiKey = '5599fbf877dc4ae2821525a43f9436d9'; // Replace with your Spoonacular API key
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=5`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const recipes = data.recipes;

            // Loop through the recipes and display them on the page
            recipes.forEach(recipe => {
                const recipeElement = document.createElement('div');
                recipeElement.innerHTML = `
          <h2>${recipe.title}</h2>
          <img src="${recipe.image}" alt="${recipe.title}">
          <p>${recipe.summary}</p>
        `;
                document.getElementById('recipes').appendChild(recipeElement);
            });
        })
        .catch(error => {
            console.log('Error fetching recipes:', error);
        });
}

// Call the fetchRecipes function when the page loads
window.onload = fetchRecipes;