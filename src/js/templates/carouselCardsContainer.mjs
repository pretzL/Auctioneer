export const carouselCardsHTML = (data) => {
  return `
    <div class="hidden duration-700 ease-in-out w-full h-full" data-carousel-item>
      <img class="rounded-box h-full w-full" src="${data[0]}"/>
    </div>
  `;
};
