import timeImg from "/src/assets/icons/bx-time.svg";
import { formatFirebaseTimestamp } from "./utils";

export function recipeCardOne(sectionName, recipesData) {
  const card_main_container = document.createElement("div");

  card_main_container.setAttribute("id", "card__main--container");

  recipesData.forEach((recipe) => {
    const card_container = document.createElement("div");
    // const cooking_time_container = document.createElement("div");
    const date_time_container = document.createElement("div");
    const other_details_container = document.createElement("div");
    const recipe_img = document.createElement("img");
    const recipe_category_text = document.createElement("p");
    const recipe_title_text = document.createElement("h2");
    // const recipe_cooking_time_text = document.createElement("p");
    const recipe_date_created = document.createElement("p");
    const recipe_description = document.createElement("p");
    const time_img_one = document.createElement("img");
    const time_img_two = document.createElement("img");
    const save_btn = document.createElement("btn");

    card_container.setAttribute("id", "recipe__card--one");
    card_container.setAttribute("data-searched-id", recipe.idMeal);
    // cooking_time_container.setAttribute("class", "cooking__time--container");
    date_time_container.setAttribute("class", "date__time--container");
    recipe_category_text.setAttribute("class", "category__text");
    other_details_container.setAttribute("class", "other__details--container");
    save_btn.setAttribute("class", "recipe__save--btn save__btn");
    save_btn.setAttribute("data-modal-btn", "save");
    recipe_description.setAttribute("class", "recipe__description");

    recipe_img.src = recipe.strMealThumb;
    recipe_img.style.width = "21.25rem";
    recipe_img.style.height = "15rem";
    recipe_category_text.textContent = recipe.strCategory;
    recipe_title_text.textContent = recipe.strMeal;
    // recipe_cooking_time_text.textContent = recipe.cookingTime;
    time_img_one.src = timeImg;
    time_img_one.style.width = "1.125rem";
    time_img_one.style.style = "1.125rem";
    time_img_two.src = timeImg;
    time_img_two.style.width = "1.125rem";
    time_img_two.style.style = "1.125rem";
    recipe_date_created.textContent = recipe.dateCreated;
    recipe_description.textContent = recipe.description;
    save_btn.textContent = "Save";

    if (sectionName === "Recently Added Custom Recipes") {
      date_time_container.appendChild(time_img_one);
      date_time_container.appendChild(recipe_date_created);
    }
    other_details_container.appendChild(recipe_category_text);
    other_details_container.appendChild(date_time_container);
    // cooking_time_container.appendChild(time_img_two);
    // cooking_time_container.appendChild(recipe_cooking_time_text);
    card_container.appendChild(recipe_img);
    card_container.appendChild(other_details_container);
    card_container.appendChild(recipe_title_text);
    sectionName === "Recently Added Custom Recipes" &&
      card_container.appendChild(recipe_description);
    if (sectionName === "Quick & Easy Recipes") {
      card_container.appendChild(cooking_time_container);
    } else if (sectionName === "") {
      card_container.appendChild(save_btn);
    }
    card_main_container.appendChild(card_container);
  });

  return card_main_container;
}

export function recipeCardTwo(allRecipeData) {
  const card_main_container = document.createElement("div");

  card_main_container.setAttribute("id", "card__main--container");

  allRecipeData.forEach((recipe) => {
    const card_container = document.createElement("div");
    const date_time_container = document.createElement("div");
    const other_details_container = document.createElement("div");
    const grouped_buttons_container = document.createElement("div");
    const recipe_img = document.createElement("img");
    const recipe_category_text = document.createElement("p");
    const recipe_title_text = document.createElement("h2");
    const recipe_date_created = document.createElement("p");
    const time_img = document.createElement("img");
    const edit_btn = document.createElement("btn");
    const delete_btn = document.createElement("btn");
    const remove_btn = document.createElement("btn");

    card_container.setAttribute("id", "recipe__card");
    card_container.setAttribute("data-recipe-id", recipe.id);
    date_time_container.setAttribute("class", "date__time--container");
    recipe_category_text.setAttribute("class", "category__text");
    other_details_container.setAttribute("class", "other__details--container");
    edit_btn.setAttribute("class", "recipe__edit--btn save__btn");
    edit_btn.setAttribute("data-modal-btn", "edit_recipe");
    delete_btn.setAttribute("class", "recipe__delete--btn save__btn");
    delete_btn.setAttribute("data-modal-btn", "delete_recipe");
    remove_btn.setAttribute("class", "recipe__remove--btn save__btn");
    remove_btn.setAttribute("data-modal-btn", "remove_recipe");
    
    grouped_buttons_container.setAttribute(
      "class",
      "grouped__buttons--container"
    );

    recipe_img.src = recipe.url;
    recipe_img.style.width = "21.25rem";
    recipe_img.style.height = "15rem";
    recipe_category_text.textContent = recipe.category;
    recipe_title_text.textContent = recipe.title;
    time_img.src = timeImg;
    time_img.style.width = "1.125rem";
    time_img.style.style = "1.125rem";
    if (recipe.source === "custom") {
      recipe_date_created.textContent = formatFirebaseTimestamp(
        recipe.dateCreated
      );
    } 
    edit_btn.textContent = "Edit";
    delete_btn.textContent = "Delete";
    remove_btn.textContent = "Remove";

    date_time_container.appendChild(time_img);
    date_time_container.appendChild(recipe_date_created);
    other_details_container.appendChild(recipe_category_text);
    if (recipe.source === "custom")
      other_details_container.appendChild(date_time_container);

    card_container.appendChild(recipe_img);
    card_container.appendChild(other_details_container);
    card_container.appendChild(recipe_title_text);
    if (recipe.source === "custom") {
      grouped_buttons_container.appendChild(edit_btn);
      grouped_buttons_container.appendChild(delete_btn);
    } else if (recipe.source === "searched") {
      grouped_buttons_container.appendChild(edit_btn);
      grouped_buttons_container.appendChild(remove_btn);
    }
    card_container.appendChild(grouped_buttons_container);

    card_main_container.appendChild(card_container);
  });

  return card_main_container;
}
