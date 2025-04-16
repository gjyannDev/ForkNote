export function searchBar() {
  const search_bar_container = document.createElement("div");
  const search_bar_form = document.createElement("search--form");
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

export default function HomePageContent() {}
