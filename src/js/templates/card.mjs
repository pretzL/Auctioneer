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

  const image = validateImage(data.media[0]);
  return `
    <a href="./listing.html?id=${data.id}" class="w-full h-[300px] listing-card">
      <figure class="relative max-w-sm cursor-pointer shadow-xl bg-base-100 rounded-lg w-full h-full">
        <img src="${image}" alt="Image for '${data.title}'" class="rounded-lg brightness-75 object-cover w-full h-full">
        <figcaption class="absolute bottom-6 px-4 text-lg text-white flex flex-col w-full">
          <h2 class="card-title outline-black">${data.title}</h2>
            <div class="card-actions justify-end">
              <label class="btn bg-dark-green">${price}</label>
            </div>
        </figcaption>
      </figure>
    </a>
    `;
};
