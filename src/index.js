import "./styles.css";
import menuComponent from "./components/menu/menu";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", () => {
  page.removeContentFromPage();
  // page.loadPage(homeComponent);
});

menuButton.addEventListener("click", () => {
  page.removeContentFromPage();
  page.loadPage(menuComponent);
});

aboutButton.addEventListener("click", () => {
  page.removeContentFromPage();
  // page.loadPage(aboutComponent);
});

const page = (() => {
  const container = document.querySelector("#content");
  const loadPage = (page) => {
    container.appendChild(page());
  }
  const removeContentFromPage = () => {
    while (container.lastChild) {
      container.removeChild(container.lastChild);
    }
  }
  return {
    loadPage,
    removeContentFromPage
  }
})();



