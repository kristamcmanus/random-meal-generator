const getMealBtn = document.getElementById("get-meal-btn")

getMealBtn.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(res => {
      createMeal(res.meals[0])
    })
})
