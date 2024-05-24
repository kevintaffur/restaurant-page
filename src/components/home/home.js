import "./home.css";
import special from "../../images/food.png";

function homeComponent() {
  const container = document.createElement("div");
  const specials = document.createElement("div");
  const specialsTitle = document.createElement("div");
  const specialsImages = document.createElement("div");
  const sectionTwo = document.createElement("div");
  const sectionTwoTitle = document.createElement("div");
  const sectionTwoBox = document.createElement("div");

  container.classList.add("container-menu");
  specials.classList.add("specials");
  specialsTitle.classList.add("specials-title");
  specialsImages.classList.add("specials-images");
  sectionTwo.classList.add("section-two");
  sectionTwoTitle.classList.add("section-two-title");
  sectionTwoBox.classList.add("section-two-box");

  specialsTitle.textContent = "Today's Specials";
  sectionTwoTitle.textContent = "Section Two Title";

  for (let i = 0; i < 3; i++) {
    const image = new Image();
    image.src = special;
    image.classList.add("special-image");
    specialsImages.appendChild(image);
  }

  specials.appendChild(specialsTitle);
  specials.appendChild(specialsImages);

  sectionTwo.appendChild(sectionTwoTitle);
  sectionTwo.appendChild(sectionTwoBox);

  container.appendChild(specials);
  container.appendChild(sectionTwo);

  return container;
}

export default homeComponent;
