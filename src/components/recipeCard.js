import timeImg from "/src/assets/icons/bx-time.svg";

export function recipeCardOne(sectionName, recipesData) {
  const card_main_container = document.createElement("dive");

  card_main_container.setAttribute("id", "card__main--container");

  recipesData.forEach((recipe) => {
    const card_container = document.createElement("div");
    const cooking_time_container = document.createElement("div");
    const recipe_img = document.createElement("img");
    const recipe_category_text = document.createElement("p");
    const recipe_title_text = document.createElement("h2");
    const recipe_cooking_time_text = document.createElement("p");
    const recipe_cooking_time_img = document.createElement("img");

    card_container.setAttribute("id", "recipe__card--one");
    cooking_time_container.setAttribute("class", "cooking__time--container");
    recipe_category_text.setAttribute("class", "category__text");

    recipe_img.src = recipe.image;
    recipe_img.style.width = "21.25rem";
    recipe_img.style.height = "15rem";
    recipe_category_text.textContent = recipe.category;
    recipe_title_text.textContent = recipe.title;
    recipe_cooking_time_text.textContent = recipe.cookingTime;
    recipe_cooking_time_img.src = timeImg;
    recipe_cooking_time_img.style.width = "1.125rem";
    recipe_cooking_time_img.style.style = "1.125rem";

    card_container.appendChild(recipe_img);
    card_container.appendChild(recipe_category_text);
    card_container.appendChild(recipe_title_text);
    cooking_time_container.appendChild(recipe_cooking_time_img);
    cooking_time_container.appendChild(recipe_cooking_time_text);
    card_container.appendChild(cooking_time_container);

    card_main_container.appendChild(card_container);
  });

  return card_main_container;
}
