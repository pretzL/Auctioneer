// CAROUSEL FROM https://www.youtube.com/watch?v=yq4BeRtUHbk

import { carouselCardsContainer } from "../util/variables.mjs";

// Carousel slide function, with infinite loop
export function moveCarousel(button) {
  const carouselContainer = document.querySelector(".carousel-container");
  const carouselIndex = parseInt(getComputedStyle(carouselContainer).getPropertyValue("--carousel-index"));
  const itemsPerScreen = parseInt(getComputedStyle(carouselContainer).getPropertyValue("--items-per-screen"));

  if (button.classList.contains("left-arrow")) {
    if (carouselIndex - 1 < 0) {
      carouselContainer.style.setProperty("--carousel-index", carouselCardsContainer.childElementCount / itemsPerScreen - 1);
    } else {
      carouselContainer.style.setProperty("--carousel-index", carouselIndex - 1);
    }
  }

  if (button.classList.contains("right-arrow")) {
    if (carouselIndex + 1 >= carouselCardsContainer.childElementCount / itemsPerScreen) {
      carouselContainer.style.setProperty("--carousel-index", 0);
    } else {
      carouselContainer.style.setProperty("--carousel-index", carouselIndex + 1);
    }
  }
}
