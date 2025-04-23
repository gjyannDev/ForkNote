import { generateInput, resultEmpty } from "./utils";
import { recipeCardTwo } from "./recipeCard";

function myCookBookFilter(categories) {
  const cook_book_filter_container = document.createElement("div");

  cook_book_filter_container.setAttribute("class", "recipe__filter--container");

  cook_book_filter_container.appendChild(
    generateInput(
      "Category",
      "select",
      "category",
      categories,
      "",
      false
    )
  );
  cook_book_filter_container.appendChild(
    generateInput(
      "Source",
      "select",
      "source",
      [
        { value: "custom", label: "Custom" },
        { value: "searched", label: "Searched" },
      ],
      "",
      false
    )
  );
  cook_book_filter_container.appendChild(
    generateInput(
      "Alphabetical",
      "select",
      "alphabetical",
      [
        { value: "ascending", label: "Ascending" },
        { value: "descending", label: "Descending" },
      ],
      "",
      false
    )
  );

  return cook_book_filter_container;
}

export default function MyCookBook(recipeData, allCategories) {
  const cook_book_container = document.createElement("div");
  const cook_book_contents = document.createElement("div");
  const cook_book_text = document.createElement("h1");

  cook_book_container.setAttribute("class", "cook__book--container container");
  cook_book_contents.setAttribute("class", "cook__book--contents");

  cook_book_text.textContent = "My Cookbook";

  cook_book_contents.appendChild(myCookBookFilter(allCategories));
  (recipeData.length !== 0)
    ? cook_book_contents.appendChild(recipeCardTwo(recipeData))
    : cook_book_contents.appendChild(resultEmpty("my_cookbook"));
  cook_book_container.appendChild(cook_book_text);
  cook_book_container.appendChild(cook_book_contents);

  return cook_book_container;
}
