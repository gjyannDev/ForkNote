import "./styles/index.scss";
import HeaderComponent from "./components/header"
import { searchBar } from "./components/homePageContent";

const header__container = document.querySelector(".header__container");
const search_bar_section = document.querySelector(".section--searchbar");

//Header
header__container.appendChild(HeaderComponent())

//Search Bar
search_bar_section.appendChild(searchBar())


