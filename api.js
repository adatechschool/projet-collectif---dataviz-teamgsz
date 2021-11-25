let mealTime = themessage;

let keyApi = "f96f134970ce483886a73b76e0689bf1"; // Amineuh: "9c912ee869724c8789f0e70b9bd3c417" or Constanteuh: "ed6c1ac8561d4ff8a0c8969668d448a6"

fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${keyApi}&query=${mealTime}&number=40&addRecipeInformation=true&image=true&fillIngredients=true`).then(function(result) {
  return result.json();
}).then(function(json) {
  displayResults(json);
});


function randomTwenty() {
  return Math.floor(Math.random() * 40);
}

function displayResults(json) {
  const resultIndex = randomTwenty()

  const imgUrl = json.results[resultIndex].image;
  let imageAffichée = document.querySelector('img');
  imageAffichée.src=imgUrl;

  const titre = json.results[resultIndex].title;
  let titreAffiché = document.querySelector('.meal');
  titreAffiché.textContent= titre;
  let deuxièmeTitre = document.querySelector('#recipeName');
  deuxièmeTitre.textContent = titre;

  const ingredients = json.results[resultIndex].extendedIngredients;
  let ingrédientsAffichés = document.querySelector('#ingrédients')
  for (let i = 0 ; i < ingredients.length ; i++) {
    let ingInList = `${ingredients[i].original}`;
    let ingElement = document.createElement('li');
    ingElement.textContent = ingInList;
    ingrédientsAffichés.appendChild(ingElement);
  } 

  const recipeSteps = json.results[resultIndex].analyzedInstructions[0].steps;
  let étapesAffichées = document.querySelector('#étapes');
  for (let i = 0 ; i < recipeSteps.length ; i++) {
    let stepInList = `${recipeSteps[i].step}`;
    let stepElement = document.createElement('li');
    stepElement.textContent = stepInList;
    étapesAffichées.appendChild(stepElement);
  
  }

}

/* 
Object
  number: 20
  offset: 0
  results: Array(20)
    0:
      aggregateLikes: 0
      analyzedInstructions: [{…}]
      cheap: false
      creditsText: "Pick Fresh Foods"
      cuisines: ['Mexican']
      dairyFree: false
      diets: (2) ['gluten free', 'lacto ovo vegetarian']
      dishTypes: (3) ['morning meal', 'brunch', 'breakfast']
      gaps: "no"
      glutenFree: true
      healthScore: 8
      id: 511748
      image: "https://spoonacular.com/recipeImages/511748-312x231.jpg"
      imageType: "jpg"
      license: "CC BY 3.0"
      lowFodmap: false
      occasions: []
      pricePerServing: 92.28
      readyInMinutes: 45
      servings: 2
      sourceName: "Pick Fresh Foods"
      sourceUrl: "http://pickfreshfoods.com/breakfast-tacos/"
      spoonacularScore: 40
      spoonacularSourceUrl: "https://spoonacular.com/breakfast-tacos-511748"
      summary: "Breakfast Tacos might be just the <b>Mexican</b> recipe you are searching for. One serving contains <b>367 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>92 cents per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. It works best as a main course, and is done in roughly <b>45 minutes</b>. This recipe is liked by 1 foodies and cooks. If you have salt & pepper, cheddar cheese, eggs, and a few other ingredients on hand, you can make it. To use up the eggs you could follow this main course with the <a href=\"https://spoonacular.com/recipes/rose-levy-beranbaums-chocolate-tomato-cake-with-mystery-ganache-27408\">Rose Levy Beranbaum's Chocolate Tomato Cake with Mystery Ganache</a> as a dessert. All things considered, we decided this recipe <b>deserves a spoonacular score of 42%</b>. This score is solid. Try <a href=\"https://spoonacular.com/recipes/tacos-para-el-desayuno-breakfast-tacos-226711\">Tacos paran el Desayuno (Breakfast Tacos)</a>, <a href=\"https://spoonacular.com/recipes/breakfast-tacos-729430\">Breakfast Tacos</a>, and <a href=\"https://spoonacular.com/recipes/breakfast-tacos-198771\">Breakfast Tacos</a> for similar recipes."
      sustainable: false
      title: "Breakfast Tacos"
      vegan: false
      vegetarian: true
      veryHealthy: false
      veryPopular: false
      weightWatcherSmartPoints: 11
*/