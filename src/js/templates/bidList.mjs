export const bidListHTML = (bid) => {
  return `
    <div class="bg-light-green px-2 py-2 rounded shadow-xl">
      <div class="flex items-center gap-2 w-full">
        <div class="w-full">
          <p>${bid.bidderName}</p>
          <p>${bid.created}</p>
        </div>
        <div class="bg-dark-green rounded w-24 text-white text-center p-1">${bid.amount}</div>
      </div>
    </div>
    `;
};
