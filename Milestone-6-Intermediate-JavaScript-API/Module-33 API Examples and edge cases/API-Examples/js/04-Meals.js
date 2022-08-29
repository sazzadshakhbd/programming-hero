const loadMeals = (search) => {
    const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
const displayMeals = (meals) => {
    // console.log(meals)
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = ``;
    // console.log(mealsContainer);
    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card" onclick="loadMealDetails(${meal.idMeal})">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 170)}</p>
            </div>
        </div>
        `;
        mealsContainer.appendChild(mealDiv);
    })
}
const searchFood = () => {
    // console.log('sazzad');
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadMeals(searchText);
    searchField.value = '';
}
const loadMealDetails = (idMeal) => {
    // console.log(idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = (meal) => {
    // console.log(meal)
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = ``;
    const createDiv = document.createElement('div');
    createDiv.classList.add('card');
    createDiv.classList.add('mb-5')
    createDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 170)}</p>
    </div>
    `;
    detailsContainer.appendChild(createDiv);
}
loadMeals('');