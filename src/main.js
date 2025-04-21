import "./styles/index.scss";
import HeaderComponent from "./components/header";
import { searchBar } from "./components/homePageContent";
import DefaultHomePageContent from "./components/homePageContent";
import { getSearchedRecipe } from "./components/recipesApi";
import SearchedPageContent from "./components/searchedPageContent";
import Footer from "./components/footer";
import Modal from "./components/modal";
import { hideModal, showModal, getFormData } from "./components/modal";
import { addCustomRecipe } from "./components/recipesApi";

const header__container = document.querySelector(".header__container");
const search_bar_section = document.querySelector(".section--searchbar");
const content_section = document.querySelector(".section--content");
const search_form = document.querySelector("#search__bar--form");
const footer_container = document.querySelector(".footer__container");
const footer_contents = document.querySelector(".footer__contents");

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
      const value_upper_case =
        search_bar_value.charAt(0).toUpperCase() + search_bar_value.slice(1);

      if (!search_bar_value) {
        content_section.replaceChildren(DefaultHomePageContent(recipes));
      } else {
        const searched_recipe = await getSearchedRecipe(search_bar_value);

        content_section.replaceChildren(
          SearchedPageContent(searched_recipe.meals, value_upper_case)
        );
      }
    }
  });
});

//Footer
footer_container.insertBefore(Footer(), footer_contents);

//Open modal for edit, delete, and add recipe
document.querySelectorAll("[data-modal-btn]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const selected_modal = e.currentTarget.getAttribute("data-modal-btn");

    if (selected_modal === "add_recipe") {
      const add_modal_container = document.getElementById(
        "add__modal--container"
      );

      add_modal_container.replaceChildren(Modal("add modal"));

      showModal("modal__container");
    }
  });
});

document.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("cancel__btn--modal")) {
    hideModal("modal__container");
  }

  if (e.target && e.target.classList.contains("next__btn--modal")) {
    hideModal("step__one--container");
    showModal("step__two--container");
  }

  if (e.target && e.target.classList.contains("back__btn--modal")) {
    hideModal("step__two--container");
    showModal("step__one--container");
  }

  if (e.target && e.target.classList.contains("add__btn--modal")) {
    e.preventDefault();

    let recipe_form = document.querySelector(".recipe__form");

    const data = getFormData(recipe_form);

    addCustomRecipe(data);

    hideModal("modal__container");
  }
});
