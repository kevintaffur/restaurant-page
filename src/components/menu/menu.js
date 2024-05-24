import "./menu.css";
import categoriesData from "../../data/categories.json";
import menuData from "../../data/menu";

function menuComponent() {
  const container = document.createElement("div");
  const menu = document.createElement("div");
  const menuTitle = document.createElement("div");
  const menuCards = document.createElement("div");
  const categories = document.createElement("div");
  const categoriesTitle = document.createElement("div");
  const categoriesBox = document.createElement("div");

  const menuArr = menuData.menu;
  const categoriesArr = categoriesData.categories;
  
  // food card
  for (let i = 0; i < menuArr.length; i++) {
    const card = document.createElement("div");
    const cardImage = new Image();
    cardImage.src = menuArr[i].imageUrl;
    const name = document.createElement("div");
    const price = document.createElement("div");
    name.textContent = menuArr[i].name;
    price.textContent = menuArr[i].price.toFixed(2);

    cardImage.classList.add("food-image");
    name.classList.add("food-name");
    price.classList.add("food-price");

    card.appendChild(cardImage);
    card.appendChild(name);
    card.appendChild(price);

    card.classList.add("card");
    menuCards.appendChild(card);
  }
  
  // food category
  for (let i = 0; i < categoriesArr.length; i++) {
    const category = document.createElement("div");
    category.classList.add("category");
    category.textContent = categoriesArr[i];
    categoriesBox.appendChild(category);
  }

  container.classList.add("container");
  menu.classList.add("menu");
  menuTitle.classList.add("menu-title");
  menuCards.classList.add("menu-cards");
  categories.classList.add("categories");
  categoriesTitle.classList.add("categories-title");
  categoriesBox.classList.add("categories-box");

  // titles
  menuTitle.textContent = "Menu";
  categoriesTitle.textContent = "Categories";

  categories.appendChild(categoriesTitle);
  categories.appendChild(categoriesBox);

  menu.appendChild(menuTitle);
  menu.appendChild(menuCards);

  container.appendChild(menu);
  container.appendChild(categories);

  return container;
}

export default menuComponent;
