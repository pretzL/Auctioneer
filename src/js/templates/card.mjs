import { setIcon } from "../favorites/find.mjs";
import { sortAmountAsc } from "../components/filters/amountFilter.mjs";
import { validateImage } from "../components/validateImage.mjs";

export const cardHTML = (data) => {
  let price = 0;
  if (data.bids) {
    if (data.bids.length > 0) {
      const sorted = sortAmountAsc(data.bids);
      price = sorted[0].amount;
    }
  }

  let iconHTML = setIcon(data);

  const image = validateImage(data.media[0]);
  return `
    <a href="./listing.html?id=${data.id}" class="w-full h-[300px] listing-card">
      <figure class="relative max-w-sm cursor-pointer shadow-xl bg-base-100 rounded-lg w-full h-full">
        <img src="${image}" alt="Image for '${data.title}'" class="rounded-lg brightness-75 object-cover w-full h-full" onerror='this.src="https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png"'>
        <div class="card-actions absolute top-2 right-2">
          <label class="btn bg-dark-green text-white rounded-full h-auto w-auto min-h-0 p-2">${iconHTML}</label>
        </div>
        <figcaption class="absolute bottom-6 px-4 text-lg text-white flex flex-col w-full">
          <h2 class="card-title truncate">${data.title}</h2>
          <div class="card-actions justify-end">
            <label class="btn bg-dark-green text-white">${price}</label>
          </div>
        </figcaption>
      </figure>
    </a>
    `;
};
