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

    let ingreCount = 1;
    let measureCount = 1;
    var imgList = document.getElementById('ingredients');

    while(imgList.hasChildNodes()){
        imgList.removeChild(imgList.firstChild);
    }

    for (const x in data){
        if(x.includes('strIngredient') && data[x] != "" && data[x] != null){
            var item = document.createElement('li');
            item.id = 'i' + ingreCount;
            ingreCount++;
            item.appendChild(document.createTextNode(data[x] + ' - '));
            imgList.appendChild(item);
        }
        else if (x.includes('strMeasure') && data[x] != " " && data[x] != "" && data[x] != null){
            var item = document.getElementById('i' + measureCount.toString());
            item.innerHTML = item.innerHTML + data[x];
            measureCount++;
        }
    }
    
    document.getElementById('ingTitle').style.display = 'block';
    document.getElementById('recipeImg').src = data.strMealThumb;

    const cate = document.getElementById('category');
    cate.style.display = 'block';
    cate.innerHTML = "<b>Category: </b>" + data.strCategory;
    
    const area = document.getElementById('area');
    area.style.display = 'block';
    area.innerHTML = "<b>Area: </b>" + data.strArea;
    
    document.getElementById('recipeName').innerHTML = data.strMeal;
    document.getElementById('recipeInstruct').innerHTML = data.strInstructions;
    
    document.getElementById('video').style.display = 'block';
    document.getElementById('video').src = "https://www.youtube.com/embed/" + data.strYoutube.slice(-11);
}
