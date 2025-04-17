import "./styles/index.scss";
import HeaderComponent from "./components/header";
import { searchBar } from "./components/homePageContent";
import DefaultHomePageContent from "./components/homePageContent";
import { getSearchedRecipe } from "./components/recipesApi";

const header__container = document.querySelector(".header__container");
const search_bar_section = document.querySelector(".section--searchbar");
const content_section = document.querySelector(".section--content");
const search_form = document.querySelector("#search__bar--form");
const search_input = document.querySelector("#search__bar")?.value;

const recipes = [
  [
    {
      image: "https://picsum.photos/400/300",
      title: "Spaghetti Bolognese",
      category: "Pasta",
      description:
        "A rich and hearty Italian classic made with ground beef and tomato sauce.",
      cookingTime: "45 minutes",
      dateCreated: "2025-04-10",
    },
    {
      image: "https://picsum.photos/400/300",
      title: "Thai Green Curry With Tomato and Tite",
      category: "Curry",
      description:
        "A spicy and fragrant Thai dish with coconut milk, green chili paste, and vegetables.",
      cookingTime: "30 minutes",
      dateCreated: "2025-04-12",
    },
    {
      image: "https://picsum.photos/400/300",
      title: "Buttermilk Pancakes",
      category: "Breakfast",
      description:
        "Fluffy pancakes made with buttermilk, perfect for a cozy morning meal.",
      cookingTime: "20 minutes",
      dateCreated: "2025-04-15",
    },
  ],
  [
    {
      image: "https://picsum.photos/400/300",
      title: "Grilled Chicken Salad",
      category: "Salad",
      description:
        "A healthy salad with grilled chicken, mixed greens, cherry tomatoes, and vinaigrette.",
      cookingTime: "25 minutes",
      dateCreated: "2025-04-11",
    },
    {
      image: "https://picsum.photos/400/300",
      title: "Mushroom Risotto",
      category: "Rice",
      description:
        "Creamy risotto cooked slowly with mushrooms, white wine, and Parmesan cheese.",
      cookingTime: "40 minutes",
      dateCreated: "2025-04-13",
    },
    {
      image: "https://picsum.photos/400/300",
      title: "Avocado Toast with Poached Egg",
      category: "Breakfast",
      description:
        "Crispy toast topped with smashed avocado, poached egg, and chili flakes.",
      cookingTime: "15 minutes",
      dateCreated: "2025-04-14",
    },
  ],
  [
    {
      image: "https://picsum.photos/400/300",
      title: "Beef Tacos",
      category: "Mexican",
      description:
        "Soft tortillas filled with seasoned ground beef, lettuce, cheese, and salsa.",
      cookingTime: "20 minutes",
      dateCreated: "2025-04-09",
    },
    {
      image: "https://picsum.photos/400/300",
      title: "Creamy Tomato Soup",
      category: "Soup",
      description:
        "A comforting bowl of smooth tomato soup served with fresh herbs and croutons.",
      cookingTime: "35 minutes",
      dateCreated: "2025-04-08",
    },
    {
      image: "https://picsum.photos/400/300",
      title: "Chocolate Lava Cake",
      category: "Dessert",
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
  content_section.appendChild(DefaultHomePageContent(recipes));

  document.addEventListener("submit", async (e) => {
    if (e.target && e.target.id === "search__bar--form") {
      e.preventDefault();

      const search_bar_input = e.target.querySelector("#search__bar");
      const search_bar_value = search_bar_input?.value.trim();

      if (!search_bar_value) {
        content_section.appendChild(DefaultHomePageContent(recipes));
      } else {
        const searched_recipe = await getSearchedRecipe(search_bar_value);

      }
    }
  });
});
