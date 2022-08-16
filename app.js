let input = document.getElementById("input")
let searchBtn = document.getElementById("search-button")
let list = document.querySelector(".recipe-list")


searchBtn.addEventListener("click", getFood)

function getFood(){
    let inputValue = input.value

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let result = ""
            if(data.meals){
                data.meals.forEach(meal => {
                    result +=
                    ` 
                    <div class="recipe-card">
                        <img class="recipe-image" src=${meal.strMealThumb} alt="recipe">
                        <h3>${meal.strMeal}</h3>
                        <div class="recipe-icons">
                            <img src="./images/face-smile-wink-solid.svg" alt="">
                            <img src="./images/utensils-solid.svg" alt="">
                            <img src="./images/mug-hot-solid.svg" alt="">
                        </div>
                        <button class="button">Recipe</button>
                    </div>
                    `
                });
            } else{
                result = `
                    <div class="no-results">
            <img width="200" src="./images/free-icon-no-results-6146689.png" alt="">
            <h1>No results bro please type other ingridients and search</h1>
        </div>
                `
            }
            list.innerHTML = result
        })
}