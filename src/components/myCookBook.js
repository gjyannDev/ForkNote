import { generateInput } from "./utils";

function myCookBookFilter() {
  const cook_book_filter_container = document.createElement("div");

  cook_book_filter_container.setAttribute("class", "recipe__filter--container");

  cook_book_filter_container.appendChild(
    generateInput(
      "Category",
      "select",
      "category",
      [{ value: "low", label: "Vegan" }],
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

export default function MyCookBook(recipeData) {
  const cook_book_container = document.createElement("div");
  const cook_book_contents = document.createElement("div");
  const cook_book_text = document.createElement("h1");

  cook_book_container.setAttribute("class", "cook__book--container");
  cook_book_contents.setAttribute("class", "cook__book--contents");

  cook_book_text.textContent = "My Cookbook";

  //TODO: Add recipe card in here
  // cook_book_contents.appendChild();
  cook_book_container.appendChild(cook_book_text);
  cook_book_container.appendChild(myCookBookFilter());
  //TODO: Append the cook book contents in here
  cook_book_container.appendChild(cook_book_contents);

  return cook_book_container;
}
