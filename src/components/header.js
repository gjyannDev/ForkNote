import logoImg from "/src/assets/images/fork_note_logo.png";

export default function HeaderComponent() {
  const sub_header_container = document.createElement("div");
  const header_container_left = document.createElement("div");
  const header_container_right = document.createElement("div");
  const header_nav_link = document.createElement("div");
  const logo_img = document.createElement("img");
  const add_recipe_btn = document.createElement("button");
  const home_text = document.createElement("p");
  const my_cookbook_text = document.createElement("p");

  sub_header_container.setAttribute("class", "sub__header--container");
  header_container_left.setAttribute("class", "header__container--left");
  header_container_right.setAttribute("class", "header__container--right");
  header_nav_link.setAttribute("class", "header__nav");
  logo_img.setAttribute("class", "logo__img");
  add_recipe_btn.setAttribute("class", "add__recipe--btn btn--primary");

  home_text.textContent = "Home";
  my_cookbook_text.textContent = "My Cookbook";
  logo_img.src = logoImg;
  logo_img.alt = "ForkNote Logo Image";
  logo_img.style.width = "156px";
  logo_img.style.height = "48px";
  add_recipe_btn.textContent = "Add Recipe";

  header_container_left.appendChild(logo_img);
  header_nav_link.appendChild(home_text);
  header_nav_link.appendChild(my_cookbook_text);
  header_container_right.appendChild(add_recipe_btn);
  sub_header_container.appendChild(header_container_left);
  sub_header_container.appendChild(header_nav_link);
  sub_header_container.appendChild(header_container_right);

  return sub_header_container;
}
