import "./styles/index.scss";
import HeaderComponent from "./components/header";
import { searchBar } from "./components/homePageContent";
import DefaultHomePageContent from "./components/homePageContent";
import { getSearchedRecipe } from "./components/recipesApi";
import SearchedPageContent from "./components/searchedPageContent";

const header__container = document.querySelector(".header__container");
const search_bar_section = document.querySelector(".section--searchbar");
const content_section = document.querySelector(".section--content");
const search_form = document.querySelector("#search__bar--form");
const search_input = document.querySelector("#search__bar")?.value;

const recipes = [
  [
    {
      strMealThumb: "https://picsum.photos/400/300",
      strMeal: "Grilled Chicken Salad",
      strCategory: "Salad",
      description:
        "A healthy salad with grilled chicken, mixed greens, cherry tomatoes, and vinaigrette.",
      cookingTime: "25 minutes",
      dateCreated: "2025-04-11",
    },
    {
      strMealThumb: "https://picsum.photos/400/300",
      strMeal: "Mushroom Risotto",
      strCategory: "Rice",
      description:
        "Creamy risotto cooked slowly with mushrooms, white wine, and Parmesan cheese.",
      cookingTime: "40 minutes",
      dateCreated: "2025-04-13",
    },
    {
      strMealThumb: "https://picsum.photos/400/300",
      strMeal: "Avocado Toast with Poached Egg",
      strCategory: "Breakfast",
      description:
        "Crispy toast topped with smashed avocado, poached egg, and chili flakes.",
      cookingTime: "15 minutes",
      dateCreated: "2025-04-14",
    },
  ],
  [
    {
      strMealThumb: "https://picsum.photos/400/300",
      strMeal: "Beef Tacos",
      strCategory: "Mexican",
      description:
        "Soft tortillas filled with seasoned ground beef, lettuce, cheese, and salsa.",
      cookingTime: "20 minutes",
      dateCreated: "2025-04-09",
    },
    {
      strMealThumb: "https://picsum.photos/400/300",
      strMeal: "Creamy Tomato Soup",
      strCategory: "Soup",
      description:
        "A comforting bowl of smooth tomato soup served with fresh herbs and croutons.",
      cookingTime: "35 minutes",
      dateCreated: "2025-04-08",
    },
    {
      strMealThumb: "https://picsum.photos/400/300",
      strMeal: "Chocolate Lava Cake",
      strCategory: "Dessert",
      description:
        "A decadent dessert with a warm, gooey chocolate center and a moist outer layer.",
      cookingTime: "25 minutes",
      dateCreated: "2025-04-07",
    },
  ],
];

//Header
header__container.appendChild(HeaderComponent());

//Search Bar
search_bar_section.appendChild(searchBar());

document.addEventListener("DOMContentLoaded", () => {
  content_section.replaceChildren(DefaultHomePageContent(recipes));

  document.addEventListener("submit", async (e) => {
    if (e.target && e.target.id === "search__bar--form") {
      e.preventDefault();

      const search_bar_input = e.target.querySelector("#search__bar");
      const search_bar_value = search_bar_input?.value.trim();

      if (!search_bar_value) {
        content_section.replaceChildren(DefaultHomePageContent(recipes));
      } else {
        const searched_recipe = await getSearchedRecipe(search_bar_value);

        console.log(searched_recipe.meals)
        content_section.replaceChildren(SearchedPageContent(searched_recipe.meals))
      }
    }
  });
});
