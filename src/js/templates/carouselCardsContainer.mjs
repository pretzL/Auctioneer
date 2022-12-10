import { validateImage } from "../components/validateImage.mjs";

export const carouselCardsHTML = (data) => {
  const image = validateImage(data);

  return `
    <div class="carousel-card">
      <img class="rounded-lg h-full w-full object-center" src="${image}" alt="Image of a listing" onerror='this.src="https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png"'/>
    </div>
  `;
};
