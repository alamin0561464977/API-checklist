const loadSingleUser = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displaySingleUser(data.results[0]))
};
loadSingleUser();

const displaySingleUser = (user) => {
    console.log(user);
};

// ====== meal ========
const toggleSpinner = (displayStyle) => {
    document.getElementById('spinner').style.display = displayStyle;
}
const toggleSSearchResult = (displayStyle) => {
    document.getElementById('meals').style.display = displayStyle;
}

const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;
    toggleSpinner('block')
    toggleSSearchResult('none')
    loadMeals(searchText)
    document.getElementById('search-field').value = '';
}
const loadMeals = searchText => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
};

const displayMeals = (meals) => {
    const container = document.getElementById('meals')
    container.textContent = '';
    if (!meals) {
        console.log('dkjflkdsjfkldsklfjdslkjfdkjfkdlfkj')
    }
    meals?.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div')
        div.innerHTML = `
        <img width="250" src="${meal.strMealThumb}" alt="">
        <h1>${meal.strMeal}</h1>
        <button onclick="loadMealDetail('${meal.strMeal}')">click me</buttin>
        `
        container.appendChild(div)
    });
    toggleSpinner('none')
    toggleSSearchResult('block')
};

loadMeals('fish');

const loadMealDetail = (mealName) => {
    console.log(mealName)
}