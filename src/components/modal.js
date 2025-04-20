function inputWithLabel(labelName, inputType, name, options = [], value = "") {
  const inputContainer = document.createElement("div");
  const inputLabel = document.createElement("p");
  const input = document.createElement("input");
  const textarea = document.createElement("textarea");
  const select = document.createElement("select");

  inputContainer.setAttribute("class", "input__container");
  input.setAttribute("type", inputType);
  input.setAttribute("name", name);
  inputLabel.setAttribute("class", "input__label");
  input.setAttribute("class", "input");
  textarea.setAttribute("class", "text__area");
  textarea.setAttribute("name", name);
  select.setAttribute("class", "select");
  select.setAttribute("name", name);
  input.value = value;
  textarea.value = value;

  inputLabel.textContent = labelName;

  if (inputType === "select") {
    options.forEach((opt) => {
      const option = document.createElement("option");
      option.value = opt.value;
      option.textContent = opt.label;
      select.appendChild(option);
    });
  }

  select.value = value;

  //Appending the content to the DOM
  inputContainer.appendChild(inputLabel);
  if (inputType === "textarea") {
    inputContainer.appendChild(textarea);
  } else if (inputType === "select") {
    inputContainer.appendChild(select);
  } else {
    inputContainer.appendChild(input);
  }

  return inputContainer;
}

export default function Modal(modalType) {
  const recipe_form = document.createElement("form");
  const step_one_container = document.createElement("div");
  const step_one_inputs_container = document.createElement("div");
  const step_one_buttons_container = document.createElement("div");
  const step_two_container = document.createElement("div");
  const step_two_inputs_container = document.createElement("div");
  const step_two_buttons_container = document.createElement("div");
  const recipe_details_text = document.createElement("h2");
  const recipe_instructions_text = document.createElement("h2");
  const modal_header_container = document.createElement("div");
  const modal_header_text = document.createElement("h1");
  const modal_header_description = document.createElement("p");
  const cancel_btn = document.createElement("button");
  const next_btn = document.createElement("button");
  const add_recipe_btn = document.createElement("button");
  const back_btn = document.createElement("button");

  recipe_form.setAttribute("class", "recipe__form");
  step_one_container.setAttribute("class", "step__one--container");
  step_one_inputs_container.setAttribute("class", "step__one--inputs");
  step_one_buttons_container.setAttribute("class", "step__one--buttons");
  step_two_container.setAttribute("class", "step__two--container");
  step_two_inputs_container.setAttribute("class", "step__two--inputs");
  step_two_buttons_container.setAttribute("class", "step__two--buttons");
  modal_header_container.setAttribute("class", "modal__header--container");
  cancel_btn.setAttribute("class", "cancel__btn--modal");
  next_btn.setAttribute("class", "next__btn--modal");
  add_recipe_btn.setAttribute("class", "add__btn--modal");
  back_btn.setAttribute("class", "back__btn--modal");

  recipe_details_text.textContent = "Recipe Details";
  recipe_instructions_text.textContent = "Recipe Instruction";
  if (modalType === "add modal") {
    modal_header_text.textContent = "Add New Recipe";
    modal_header_description.textContent =
      "Fill out the information below to create new recipe";
  } else if (modalType === "edit modal") {
    modal_header_text.textContent = "Edit Recipe";
    modal_header_description.textContent =
      "Fill out the information below to edit recipe.";
  }
  cancel_btn.textContent = "Cancel";
  next_btn.textContent = "Next";
  add_recipe_btn.textContent = "Add";
  back_btn.textContent = "Back";

  modal_header_container.appendChild(modal_header_text);
  modal_header_container.appendChild(modal_header_description);

  //*Step One Container
  step_one_inputs_container.appendChild(
    inputWithLabel("Recipe Title", "input", "title")
  );
  step_one_inputs_container.appendChild(
    inputWithLabel("Image URL", "input", "url")
  );
  //TODO: Get all of the category and append it on here
  step_one_inputs_container.appendChild(
    inputWithLabel("Category", "select", "category", [ { value: "low", label: "Chicken" } ])
  );
  step_one_buttons_container.appendChild(cancel_btn);
  step_one_buttons_container.appendChild(next_btn);
  step_one_container.appendChild(recipe_details_text);
  step_one_container.appendChild(step_one_inputs_container);
  step_one_container.appendChild(step_one_buttons_container);

  //*Step Two Container
  step_two_inputs_container.appendChild(
    inputWithLabel("Recipe Ingredients", "textarea", "ingredients")
  );
  step_two_inputs_container.appendChild(
    inputWithLabel("Recipe Instructions", "textarea", "instructions")
  );
  step_two_inputs_container.appendChild(
    inputWithLabel("Notes", "textarea", "notes")
  );
  step_two_buttons_container.appendChild(back_btn);
  step_two_buttons_container.appendChild(add_recipe_btn);
  step_two_container.appendChild(recipe_instructions_text);
  step_two_container.appendChild(step_two_inputs_container);
  step_two_container.appendChild(step_two_buttons_container);

  recipe_form.appendChild(step_one_container);
  recipe_form.appendChild(step_two_container);

  return recipe_form;
}
