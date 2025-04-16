import "./styles/index.scss";
import HeaderComponent from "./components/header";
import { searchBar } from "./components/homePageContent";
import DefaultHomePageContent from "./components/homePageContent";

const header__container = document.querySelector(".header__container");
const search_bar_section = document.querySelector(".section--searchbar");
const content_section = document.querySelector(".section--content");
const search_form = document.querySelector("#search__bar--form");

const recipes = [
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
];

//Header
header__container.appendChild(HeaderComponent());

//Search Bar
search_bar_section.appendChild(searchBar());

document.addEventListener("DOMContentLoaded", () => {
  //TODO: Combine the data of the three section into one array
  content_section.appendChild(DefaultHomePageContent(recipes));

  document.addEventListener("submit", (e) => {
    if (e.target && e.target.id === "search__bar--form") {
      e.preventDefault();

      const searchBarInput = e.target.querySelector("#search__bar");
      const checkValue = searchBarInput?.value.trim();

      if (!checkValue) {
        content_section.appendChild(DefaultHomePageContent(recipes));
      } else {
        console.log("Filtered Page");
      }
    }
  });
});
