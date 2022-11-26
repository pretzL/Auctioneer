import { validateImage } from "../components/validateImage.mjs";

export const carouselCardsHTML = (data) => {
  console.log(data);
  const image = validateImage(data);

  return `
    <div class="hidden duration-700 ease-in-out w-full h-full" data-carousel-item>
      <img class="rounded-box h-full w-full" src="${image}"/>
    </div>
  `;
};
