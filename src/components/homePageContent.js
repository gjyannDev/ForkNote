import { recipeCardOne } from "./recipeCard";

export function searchBar() {
  const search_bar_container = document.createElement("div");
  const search_bar_form = document.createElement("form");
  const search_bar = document.createElement("input");

  search_bar_container.setAttribute("class", "search__bar--container");
  search_bar_form.setAttribute("id", "search__bar--form");
  search_bar.setAttribute("id", "search__bar");
  search_bar.setAttribute("type", "text");
  search_bar.setAttribute("placeholder", '🔍︎ Search for "Chicken"');
  search_bar.setAttribute("autocomplete", "off  ");

  search_bar_form.appendChild(search_bar);
  search_bar_container.appendChild(search_bar_form);

  return search_bar_container;
}

export function homePageSection(sectionName, recipeData) {
  const section_container = document.createElement("div");
  const section_contents = document.createElement("div");
  const section_title = document.createElement("h1");

  section_container.setAttribute("class", "section__container container");
  section_contents.setAttribute("class", "section__contents");
  section_title.setAttribute("class", "section__title");

  section_title.textContent = sectionName;

  //Append recipe card here
  if (sectionName === "Today's Picks") {
    section_contents.appendChild(recipeCardOne(sectionName, recipeData[0]));
  } else if (sectionName === "Quick & Easy Recipes") {
    section_contents.appendChild(recipeCardOne(sectionName, recipeData[1]));
  } else {
    section_contents.appendChild(recipeCardOne(sectionName, recipeData[2]));
  }
  section_container.appendChild(section_title);
  section_container.appendChild(section_contents);

  return section_container;
}

export default function DefaultHomePageContent(recipeData) {
  const home_page_container = document.createElement("div");

  home_page_container.setAttribute("class", "homepage__container");

  home_page_container.appendChild(homePageSection("Today's Picks", recipeData));
  home_page_container.appendChild(homePageSection("Recently Added Custom Recipes", recipeData));
  home_page_container.appendChild(homePageSection("Quick & Easy Recipes", recipeData));

  return home_page_container;
}
