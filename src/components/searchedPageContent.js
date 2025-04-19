import { recipeCardOne } from "./recipeCard";

function searchResultSection() {}

export function searchedSection(sectionName, searchedData) {
  const section_container = document.createElement("div");
  const section_contents = document.createElement("div");

  section_container.setAttribute("class", "section__container container");
  section_contents.setAttribute("class", "section__contents");

  section_contents.appendChild(recipeCardOne(sectionName, searchedData));
  section_container.appendChild(section_contents);

  return section_container;
}

export default function SearchedPageContent(searchedData) {
  const searched_page_container = document.createElement("div");
  console.log(searchedData)

  searched_page_container.setAttribute("class", "searched__page--container");

  searched_page_container.appendChild(searchedSection("", searchedData));

  return searched_page_container;
}
