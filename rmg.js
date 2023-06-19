fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => {
        let recipe = data.meals[0];
        console.log(recipe);
        console.log(recipe.strMeal);
        console.log(recipe.strInstructions);
    })