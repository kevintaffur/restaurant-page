import "./styles.css";
import menuComponent from "./components/menu/menu";
import homeComponent from "./components/home/home";
import aboutComponent from "./components/about/about";

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", () => {
  page.removeContentFromPage();
  page.loadPage(homeComponent);
});

menuButton.addEventListener("click", () => {
  page.removeContentFromPage();
  page.loadPage(menuComponent);
});

aboutButton.addEventListener("click", () => {
  page.removeContentFromPage();
  page.loadPage(aboutComponent);
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

page.loadPage(homeComponent);

