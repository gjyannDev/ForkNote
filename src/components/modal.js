import { generateInput } from "./utils";
import delImg from "/src/assets/images/delete_modal_img.svg";

export function displayRecipeRemoval(delType) {
  const del_main_container = document.createElement("div");
  const grouped_btn_container = document.createElement("div");
  const del_contents_container = document.createElement("div");
  const del_img = document.createElement("img");
  const del_description = document.createElement("p");
  const cancel_btn = document.createElement("button");
  const confirm_btn = document.createElement("button");

  del_main_container.setAttribute("class", "del__main--container");
  grouped_btn_container.setAttribute("class", "del__btn--container");
  del_contents_container.setAttribute("class", "del__contents--container");
  cancel_btn.setAttribute("class", "cancel__btn--modal modal__btn--secondary");
  cancel_btn.setAttribute("type", "button");
  cancel_btn.setAttribute("data-modal-cancel", "cancel__del--btn");
  confirm_btn.setAttribute("class", "confirm__btn--modal modal__btn--primary");
  confirm_btn.setAttribute("type", "submit");
  confirm_btn.setAttribute("data-modal-add", "add__confirm--btn");

  del_description.textContent = `Are you sure you want to ${
    delType === "delete" ? "delete" : "remove"
  } this recipe?`;
  cancel_btn.textContent = "Cancel";
  confirm_btn.textContent = "Confirm";
  del_img.src = delImg;
  del_img.style.width = "208px";
  del_img.style.height = "208px";

  grouped_btn_container.appendChild(cancel_btn);
  grouped_btn_container.appendChild(confirm_btn);
  del_contents_container.appendChild(del_img);
  del_contents_container.appendChild(del_description);
  del_main_container.appendChild(del_contents_container);
  del_main_container.appendChild(grouped_btn_container);

  return del_main_container;
}

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

export default function Modal(modalType, recipe = [], categoriesList = []) {
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

  console.log(categoriesList);

  recipe_form_container.setAttribute("class", "recipe__form--container");
  recipe_form.setAttribute(
    "class",
    modalType === "add modal"
      ? "recipe__form recipe__form--add"
      : "recipe__form recipe__form--edit"
  );
  step_one_container.setAttribute(
    "class",
    modalType === "add modal"
      ? "step__one--container add"
      : "step__one--container edit"
  );
  step_one_inputs_container.setAttribute("class", "step__one--inputs");
  step_one_buttons_container.setAttribute("class", "step__one--buttons");
  step_two_container.setAttribute(
    "class",
    modalType === "add modal"
      ? "step__two--container add hidden"
      : "step__two--container edit hidden"
  );
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
  if (modalType === "add modal") {
    step_one_inputs_container.appendChild(
      generateInput("Recipe Title", "input", "title")
    );
    step_one_inputs_container.appendChild(
      generateInput("Image URL", "input", "url")
    );
    step_one_inputs_container.appendChild(
      generateInput("Category", "select", "category", categoriesList)
    );
  } else if (modalType === "edit modal") {
    step_one_inputs_container.appendChild(
      generateInput("Recipe Title", "input", "title", [], recipe.title)
    );
    step_one_inputs_container.appendChild(
      generateInput("Image URL", "input", "url", [], recipe.url)
    );
    step_one_inputs_container.appendChild(
      generateInput(
        "Category",
        "select",
        "category",
        categoriesList,
        recipe.category
      )
    );
  }
  step_one_buttons_container.appendChild(cancel_btn);
  step_one_buttons_container.appendChild(next_btn);
  step_one_container.appendChild(recipe_details_text);
  step_one_container.appendChild(step_one_inputs_container);
  step_one_container.appendChild(step_one_buttons_container);

  //*Step Two Container
  if (modalType === "add modal") {
    step_two_inputs_container.appendChild(
      generateInput("Recipe Ingredients", "textarea", "ingredients")
    );
    step_two_inputs_container.appendChild(
      generateInput("Recipe Instructions", "textarea", "instructions")
    );
    step_two_inputs_container.appendChild(
      generateInput("Notes", "textarea", "notes")
    );
  } else if (modalType === "edit modal") {
    step_two_inputs_container.appendChild(
      generateInput(
        "Recipe Ingredients",
        "textarea",
        "ingredients",
        [],
        recipe.ingredients
      )
    );
    step_two_inputs_container.appendChild(
      generateInput(
        "Recipe Instructions",
        "textarea",
        "instructions",
        [],
        recipe.instructions
      )
    );
    step_two_inputs_container.appendChild(
      generateInput("Notes", "textarea", "notes", [], recipe.notes)
    );
  }
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
  const element =
    type === "class"
      ? document.querySelector(`.${modalContainer}`)
      : document.querySelector(`#${modalContainer}`);

  if (!element) {
    console.error(`Element with ${type} '${modalContainer}' not found.`);
    return;
  }

  element.classList.add("hidden");
}

export function showModal(modalContainer, type = "class") {
  const element =
    type === "class"
      ? document.querySelector(`.${modalContainer}`)
      : document.querySelector(`#${modalContainer}`);

  if (!element) {
    console.error(`Element with ${type} '${modalContainer}' not found.`);
    return;
  }

  element.classList.remove("hidden");
}

export function getFormData(formContainer) {
  const formData = new FormData(formContainer);
  const data = Object.fromEntries(formData.entries());

  return data;
}
