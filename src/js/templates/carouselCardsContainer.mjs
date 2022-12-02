import { validateImage } from "../components/validateImage.mjs";

export const carouselCardsHTML = (data) => {
  const image = validateImage(data);

  return `
    <div class="carousel-card">
      <img class="rounded-lg h-full w-full object-center" src="${image}"/>
    </div>
  `;
};
