import emptyImg from "/src/assets/images/empty_searched.svg";
import { recipeCardTwo } from "./recipeCard";
import { getAllCustomRecipes } from "./recipesApi";

export function handleError(error, functionName) {
  console.error(`Error in ${functionName}:`, error.message || error);
}

export function generateInput(
  labelName,
  inputType,
  name,
  options = [],
  value = "",
  withLabel = true
) {
  const inputContainer = document.createElement("div");
  const inputLabel = document.createElement("p");
  const input = document.createElement("input");
  const textarea = document.createElement("textarea");
  const select = document.createElement("select");

  inputContainer.setAttribute("class", "input__container");
  input.setAttribute("type", inputType);
  input.setAttribute("name", name);
  inputLabel.setAttribute("class", "input__label");
  input.setAttribute("class", "input");
  textarea.setAttribute("class", "text__area");
  textarea.setAttribute("name", name);
  select.setAttribute("name", name);
  input.value = value;
  textarea.value = value;
  if (name === "category") {
    select.setAttribute("class", "select select__value--category");
    select.setAttribute("data-select-action", name);
  } else if (name === "source") {
    select.setAttribute("class", "select select__value--source");
    select.setAttribute("data-select-action", name);
  } else if (name === "alphabetical") {
    select.setAttribute("class", "select select__value--alphabetical");
    select.setAttribute("data-select-action", name);
  }

  inputLabel.textContent = labelName;

  if (inputType === "select") {
    options.forEach((opt) => {
      const option = document.createElement("option");
      option.value = opt.value;
      option.textContent = opt.label;
      select.appendChild(option);
    });

    if (options.some((opt) => opt.value === value)) {
      select.value = value;
    } else {
      const fallbackOption = document.createElement("option");
      fallbackOption.value = labelName;
      fallbackOption.textContent = labelName;
      select.appendChild(fallbackOption);
      select.value = labelName;
    }
  }

  //Appending the content to the DOM
  if (withLabel) inputContainer.appendChild(inputLabel);

  if (inputType === "textarea") {
    inputContainer.appendChild(textarea);
  } else if (inputType === "select") {
    inputContainer.appendChild(select);
  } else {
    inputContainer.appendChild(input);
  }

  return inputContainer;
}

export function formatFirebaseTimestamp(timestamp) {
  try {
    let date;

    if (timestamp && typeof timestamp.toDate === "function") {
      date = timestamp.toDate();
    } else if (timestamp instanceof Date) {
      date = timestamp;
    } else if (typeof timestamp === "string" || typeof timestamp === "number") {
      date = new Date(timestamp);
    } else {
      throw new Error("Invalid timestamp format");
    }

    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  } catch (error) {
    console.error("Error formatting timestamp:", error);
    return "Invalid Date";
  }
}

export function resultEmpty(page) {
  const empty_searched_container = document.createElement("div");
  const empty_img = document.createElement("img");
  const empty_text = document.createElement("p");

  empty_searched_container.setAttribute("class", "empty__searched--container");

  empty_img.src = emptyImg;
  empty_img.style.width = "256px";
  empty_img.style.height = "256px";
  page === "my_cookbook"
    ? (empty_text.textContent =
        "Your cookbook is empty. Add a recipe to begin your culinary journey!")
    : (empty_text.textContent =
        "No recipes found. Try checking your spelling or using different keywords.");

  empty_searched_container.appendChild(empty_img);
  empty_searched_container.appendChild(empty_text);

  return empty_searched_container;
}

export function extractIngredients(meals) {
  const ingredients = [];

  meals.forEach((meal) => {
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`]?.trim();
      const measure = meal[`strMeasure${i}`]?.trim();

      if (ingredient && ingredient !== "") {
        ingredients.push(`${measure} ${ingredient}`.trim());
      }
    }
  });

  return ingredients;
}

export function renderRecipeCards(recipeData) {
  setTimeout(() => {
    const cardContainer = document.querySelector(".cook__book--contents");
    const oldCards = cardContainer.querySelectorAll("#recipe__card");
    const card = cardContainer.querySelector("#card__main--container");
    const empty_card = cardContainer.querySelector(
      ".empty__searched--container"
    );

    if (card) card.remove();
    if (empty_card) empty_card.remove();
    if (oldCards.length) {
      oldCards.forEach((card) => card.remove());
    }

    const result =
      recipeData.length !== 0
        ? recipeCardTwo(recipeData)
        : resultEmpty("my_cookbook");

    cardContainer.appendChild(result);
  }, 1000);
}

export async function getSearchedIdFromCustomRecipe() {
  const all_recipe = await getAllCustomRecipes();

  return all_recipe.map((recipe) => recipe.mealId);
}

export function getCategoryDropDownValues(allCategories) {
  const filtered_category = allCategories.categories.map(
    (category) => category.strCategory
  );

  const categories = filtered_category.reduce((acc, curr, i) => {
    acc.push({ value: curr, label: curr });
    return acc;
  }, []);

  return categories;
}