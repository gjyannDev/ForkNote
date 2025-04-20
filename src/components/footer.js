function callToActionFooter() {
  const cta_container = document.createElement("div");
  const cta_text_container = document.createElement("div");
  const cta_header_text = document.createElement("h1");
  const cta_sub_header_text = document.createElement("p");
  const add_recipe_btn = document.createElement("button");

  cta_container.setAttribute("class", "cta__footer--container");
  cta_text_container.setAttribute("class", "cta__text--container container");
  add_recipe_btn.setAttribute("class", "cta__footer--btn btn--primary")

  cta_header_text.textContent = "Ready to cook something amazing?";
  cta_sub_header_text.textContent =
    "Whether you're in the mood to try something new or recreate a family favorite, ForkNote helps you find delicious recipes and save your own creations — all in one place.";
  add_recipe_btn.textContent = "Add Recipe";
  
  cta_text_container.appendChild(cta_header_text);
  cta_text_container.appendChild(cta_sub_header_text);
  cta_container.appendChild(cta_text_container);
  cta_container.appendChild(add_recipe_btn);

  return cta_container;
}

export default function Footer() {
  const footer_sub_container = document.createElement("div");

  footer_sub_container.setAttribute("class", "footer__sub--container");

  footer_sub_container.appendChild(callToActionFooter());

  return footer_sub_container;
}
