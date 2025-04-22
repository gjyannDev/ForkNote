import { generateInput } from "./utils";

export function modalHeader(modalType) {
  const modal_header_container = document.createElement("div");
  const modal_header_text = document.createElement("h1");
  const modal_header_description = document.createElement("p");

  modal_header_container.setAttribute("class", "modal__header--container");
  if (modalType === "add modal") {
    modal_header_text.textContent = "Add New Recipe";
    modal_header_description.textContent =
      "Fill out the information below to create new recipe";
  } else if (modalType === "edit modal") {
    modal_header_text.textContent = "Edit Recipe";
    modal_header_description.textContent =
      "Fill out the information below to edit recipe.";
  }
  modal_header_container.appendChild(modal_header_text);
  modal_header_container.appendChild(modal_header_description);

  return modal_header_container;
}

export default function Modal(modalType) {
  const recipe_form_container = document.createElement("div");
  const recipe_form = document.createElement("form");
  const step_one_container = document.createElement("div");
  const step_one_inputs_container = document.createElement("div");
  const step_one_buttons_container = document.createElement("div");
  const step_two_container = document.createElement("div");
  const step_two_inputs_container = document.createElement("div");
  const step_two_buttons_container = document.createElement("div");
  const recipe_details_text = document.createElement("h2");
  const recipe_instructions_text = document.createElement("h2");
  const cancel_btn = document.createElement("button");
  const next_btn = document.createElement("button");
  const add_recipe_btn = document.createElement("button");
  const back_btn = document.createElement("button");

  recipe_form_container.setAttribute("class", "recipe__form--container");
  recipe_form.setAttribute("class", "recipe__form");
  step_one_container.setAttribute("class", "step__one--container");
  step_one_inputs_container.setAttribute("class", "step__one--inputs");
  step_one_buttons_container.setAttribute("class", "step__one--buttons");
  step_two_container.setAttribute("class", "step__two--container hidden");
  step_two_inputs_container.setAttribute("class", "step__two--inputs");
  step_two_buttons_container.setAttribute("class", "step__two--buttons");
  cancel_btn.setAttribute("class", "cancel__btn--modal modal__btn--secondary");
  cancel_btn.setAttribute("type", "button");
  modalType === "add modal" &&
    cancel_btn.setAttribute("data-modal-cancel", "cancel__add--btn");
  modalType === "edit modal" &&
    cancel_btn.setAttribute("data-modal-cancel", "cancel__edit--btn");
  modalType === "delete modal" &&
    cancel_btn.setAttribute("data-modal-cancel", "cancel__del--btn");
  next_btn.setAttribute("class", "next__btn--modal modal__btn--primary");
  next_btn.setAttribute("type", "button");
  next_btn.setAttribute("data-modal-btn-action", "next__btn");
  add_recipe_btn.setAttribute("class", "add__btn--modal modal__btn--primary");
  add_recipe_btn.setAttribute("type", "submit");
  modalType === "add modal" &&
    add_recipe_btn.setAttribute("data-modal-add", "add__add--btn");
  modalType === "edit modal" &&
    add_recipe_btn.setAttribute("data-modal-add", "add__edit--btn");
  back_btn.setAttribute("class", "back__btn--modal modal__btn--secondary");
  back_btn.setAttribute("type", "button");
  back_btn.setAttribute("data-modal-btn-action", "back__btn");
  recipe_details_text.textContent = "Recipe Details";
  recipe_instructions_text.textContent = "Recipe Instruction";
  cancel_btn.textContent = "Cancel";
  next_btn.textContent = "Next";
  add_recipe_btn.textContent = "Add";
  back_btn.textContent = "Back";

  //*Step One Container
  step_one_inputs_container.appendChild(
    generateInput("Recipe Title", "input", "title")
  );
  step_one_inputs_container.appendChild(
    generateInput("Image URL", "input", "url")
  );
  //TODO: Get all of the category and append it on here
  step_one_inputs_container.appendChild(
    generateInput("Category", "select", "category", [
      { value: "low", label: "Chicken" },
    ])
  );
  step_one_buttons_container.appendChild(cancel_btn);
  step_one_buttons_container.appendChild(next_btn);
  step_one_container.appendChild(recipe_details_text);
  step_one_container.appendChild(step_one_inputs_container);
  step_one_container.appendChild(step_one_buttons_container);

  //*Step Two Container
  step_two_inputs_container.appendChild(
    generateInput("Recipe Ingredients", "textarea", "ingredients")
  );
  step_two_inputs_container.appendChild(
    generateInput("Recipe Instructions", "textarea", "instructions")
  );
  step_two_inputs_container.appendChild(
    generateInput("Notes", "textarea", "notes")
  );
  step_two_buttons_container.appendChild(back_btn);
  step_two_buttons_container.appendChild(add_recipe_btn);
  step_two_container.appendChild(recipe_instructions_text);
  step_two_container.appendChild(step_two_inputs_container);
  step_two_container.appendChild(step_two_buttons_container);

  recipe_form_container.appendChild(modalHeader(modalType));
  recipe_form_container.appendChild(step_one_container);
  recipe_form_container.appendChild(step_two_container);

  recipe_form.appendChild(recipe_form_container);

  return recipe_form;
}

export function hideModal(modalContainer, type = "class") {
  if (type === "class") {
    document.querySelector(`.${modalContainer}`).classList.add("hidden");
  } else if (type == "id") {
    document.querySelector(`#${modalContainer}`).classList.add("hidden");
  }
}

export function showModal(modalContainer, type = "class") {
  if (type === "class") {
    document.querySelector(`.${modalContainer}`).classList.remove("hidden");
  } else if (type == "id") {
    document.querySelector(`#${modalContainer}`).classList.remove("hidden");
  }
}

export function getFormData(formContainer) {
  const formData = new FormData(formContainer);
  const data = Object.fromEntries(formData.entries());

  return data;
}
