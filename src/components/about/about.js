import "./about.css";
import pictureSrc from "../../images/food.png";

function aboutComponent() {
  const container = document.createElement("div");
  const picture = new Image();
  const aboutBox = document.createElement("div");
  const aboutTitle = document.createElement("div");
  const aboutContent = document.createElement("div");

  container.classList.add("container-about");
  picture.classList.add("picture");
  aboutBox.classList.add("about-box");
  aboutTitle.classList.add("about-title");
  aboutContent.classList.add("about-content");

  aboutTitle.textContent = "About us";
  picture.src = pictureSrc;

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const p5 = document.createElement("p");

  p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et pretium risus. Praesent facilisis molestie enim nec molestie. Ut auctor hendrerit orci vel eleifend. Sed malesuada dolor vel tincidunt efficitur. Vivamus at suscipit orci. Nam hendrerit nisl vel nisi eleifend, vel luctus quam commodo. Suspendisse odio odio, aliquam et metus at, sagittis lacinia nibh."

  p2.textContent = "Praesent et sagittis magna. Quisque dignissim tristique commodo. Donec faucibus pharetra ultricies. Fusce id laoreet eros. Sed commodo eget ante in lobortis. Vestibulum sodales, nisi vitae dignissim convallis, massa neque faucibus nisi, non bibendum mauris sem sed est. Duis vel aliquet nisi. Mauris condimentum id dui nec fermentum. Nulla euismod nisl at diam dignissim consectetur. Nunc luctus tempor nunc a pharetra."

  p3.textContent = "Sed lectus tellus, faucibus luctus egestas at, dapibus id odio. Proin pharetra felis nec metus pretium sagittis. Proin id vehicula turpis. Donec id tincidunt risus. Fusce egestas auctor diam eget consectetur. Aliquam in nisl consectetur, pharetra lacus in, malesuada dui. Duis velit ligula, condimentum id pulvinar sit amet, tempus in turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae"

  p4.textContent = "Etiam dictum dolor at sagittis dignissim. Etiam a eros rhoncus nibh vehicula mollis ac convallis quam. Donec ex urna, rhoncus sit amet neque et, volutpat ultrices velit. Curabitur dignissim urna posuere, pharetra mauris sit amet, sodales ante. Donec lorem felis, elementum vitae tincidunt at, aliquet eu tortor. Donec dolor metus, dictum et consectetur non, eleifend vitae tortor. Maecenas vitae lobortis ante. Curabitur eleifend sem ut nisi eleifend sagittis. Fusce enim nibh, aliquam vitae imperdiet non, imperdiet vel nulla. Proin egestas est nec orci finibus, non rhoncus nunc fermentum. Maecenas tempor nulla vulputate felis tempus bibendum. Aliquam vitae sem sit amet arcu ullamcorper iaculis."

  p5.textContent = "Cras vestibulum facilisis mi. Vestibulum egestas feugiat tristique. Proin suscipit dignissim tempor. Integer posuere sem eget dolor scelerisque blandit. Vestibulum porttitor condimentum ex, rutrum pellentesque neque. Nunc in tincidunt lectus. Phasellus tempor enim in facilisis tempor. Morbi vitae leo viverra, posuere diam ut, aliquet est. Phasellus lorem mauris, eleifend quis nisi a, mattis fermentum ex. Donec eros enim, vehicula a egestas vel, interdum volutpat erat. Donec nec felis consequat, semper eros vitae, fringilla sem. Quisque porttitor fringilla libero, vel sodales dolor accumsan sit amet. Aliquam semper leo cursus tortor efficitur, pellentesque vulputate ligula accumsan."

  aboutContent.appendChild(p1);
  aboutContent.appendChild(p2);
  aboutContent.appendChild(p3);
  aboutContent.appendChild(p4);
  aboutContent.appendChild(p5);

  aboutBox.appendChild(aboutTitle);
  aboutBox.appendChild(aboutContent);

  container.appendChild(picture);
  container.appendChild(aboutBox);

  return container;
}

export default aboutComponent;
