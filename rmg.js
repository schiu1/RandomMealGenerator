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
    //instead of img element created by html, 
    //maybe make img element in JS when button is pressed
    //document.createelement and document.body.appendchild
    document.getElementById('recipeImg').src = data.strMealThumb;
    document.getElementById('recipeName').innerHTML = data.strMeal;
    document.getElementById('recipeInstruct').innerHTML = data.strInstructions;
    //adding ingredients
    var imgList = document.getElementById('ingredients');
    var ingredient = data.strIngredient1;
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(ingredient));
    imgList.appendChild(item);
}
