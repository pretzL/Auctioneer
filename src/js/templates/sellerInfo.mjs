export const buildSellerInfo = (data) => {
  return `
    <div class="max-w-sm flex gap-4 items-center">
      <img src="${data.seller.avatar}" class="rounded-full w-24 h-24" alt="${data.seller.name}'s profile image"/>
      <div id="seller-info-text" class="flex flex-col gap-2">
        <h3 class="text-lg font-semibold">${data.seller.name}</h3>
        <p>${data.seller.email}</p>
        <p>Wins: ${data.seller.wins.length}</p>
      </div>
    </div>
    `;
};
