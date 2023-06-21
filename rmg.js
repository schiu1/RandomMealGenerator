/* fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => {
        let recipe = data.meals[0];
        console.log(recipe);
        console.log(recipe.strMeal);
        console.log(recipe.strInstructions);
    }) */

async function GetRecipe(){
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data =  await response.json().then(data => data.meals[0])
    console.log(data);
    console.log(data.strMeal);
    console.log(data.strInstructions);
}
GetRecipe()