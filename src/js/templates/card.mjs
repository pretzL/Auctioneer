import { sortAmountAsc } from "../components/filters/amountFilter.mjs";
import { validateImage } from "../components/validateImage.mjs";

export const cardHTML = (data) => {
  console.log(data);
  let price = 0;
  if (data.bids[0]) {
    const sorted = sortAmountAsc(data.bids);
    price = sorted[0].amount;
  }

  const image = validateImage(data.media[0]);
  return `
      <figure class="relative max-w-sm cursor-pointer shadow-xl bg-base-100 rounded-lg h-[300px]">
        <a href="./listing.html?id=${data.id}">
          <img class="rounded w-full h-full brightness-75" src="${image}" alt="Image of ${data.title}">
          <figcaption class="absolute bottom-6 px-4 text-lg text-white flex flex-col w-full">
            <h2 class="card-title outline-black">${data.title}</h2>
              <div class="card-actions justify-end">
                <label class="btn bg-dark-green">${price}</label>
              </div>
          </figcaption>
        </a>
      </figure>
      `;
};
