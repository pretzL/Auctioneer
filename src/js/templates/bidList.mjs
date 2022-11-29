import { timeAgo } from "../components/timeAgo.mjs";

export const bidListHTML = (bid) => {
  const dateFix = timeAgo(bid.created);

  let bidBody = `
        <div class="w-full">
          <p>${bid.bidderName}</p>
          <p class="text-sm">${dateFix}</p>
        </div>`;
  if (bid.listing) {
    bidBody = `
        <a href="./listing.html?id=${bid.listing.id}" class="w-full">
          <p>${bid.listing.title}</p>
          <p class="text-sm">${dateFix}</p>
        </a>
    `;
  }

  return `
    <div class="bg-light-green px-2 py-2 rounded shadow-xl text-black">
      <div class="flex items-center gap-2 w-full">
        ${bidBody}
        <div class="bg-dark-green rounded w-24 text-white text-center p-1">${bid.amount}</div>
      </div>
    </div>
    `;
};
