import { compileString } from "sass";
import { recipeCardOne } from "./recipeCard";
import emptyImg from "/src/assets/images/empty_searched.svg";

function searchPageEmpty() {
  const empty_searched_container = document.createElement("div");
  const empty_img = document.createElement("img");
  const empty_text = document.createElement("p");

  empty_searched_container.setAttribute("class", "empty__searched--container");

  empty_img.src = emptyImg;
  empty_img.style.width = "256px";
  empty_img.style.height = "256px";
  empty_text.textContent =
    "No recipes found. Try checking your spelling or using different keywords.";

  empty_searched_container.appendChild(empty_img);
  empty_searched_container.appendChild(empty_text);

  return empty_searched_container;
}

function searchResultSection(searchedText) {
  const search_result_container = document.createElement("div");
  const search_result_header = document.createElement("h3");
  const search_result_text = document.createElement("p");

  search_result_container.setAttribute("class", "search__result--container");
  search_result_header.setAttribute("class", "search__result--header");
  search_result_text.setAttribute("class", "search__result--text");

  search_result_header.textContent = "Search Result For";
  search_result_text.textContent = searchedText;

  search_result_container.appendChild(search_result_header);
  search_result_container.appendChild(search_result_text);

  return search_result_container;
}

export function searchedSection(sectionName, searchedData) {
  const section_container = document.createElement("div");
  const section_contents = document.createElement("div");

  section_container.setAttribute("class", "section__container container");
  section_contents.setAttribute("class", "section__contents");

  section_contents.appendChild(recipeCardOne(sectionName, searchedData));
  section_container.appendChild(section_contents);

  return section_container;
}

export default function SearchedPageContent(searchedData, searchedTextValue) {
  const searched_page_container = document.createElement("div");

  searched_page_container.setAttribute("class", "searched__page--container");

  searched_page_container.appendChild(searchResultSection(searchedTextValue));
  if (!searchedData) {
    searched_page_container.appendChild(searchPageEmpty());
  } else {
    searched_page_container.appendChild(searchedSection("", searchedData));
  }

  return searched_page_container;
}
