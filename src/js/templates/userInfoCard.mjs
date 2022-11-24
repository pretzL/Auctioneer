export const userInfoCard = (data) => {
  return `
  <div id="info-text" class="w-full">
    <div class="w-full flex flex-col gap-4">
      <h1 class="font-bold mb-4 text-lg">${data.name}</h1>
      <p>${data.email}</p>
      <p>${data.credits}</p>
      <p>Listings: ${data._count.listings}</p>
    </div>
  </div>
  <div class="flex gap-2 w-24 h-24">
    <img src="${data.avatar}" class="w-full h-full rounded-full" alt="${data.name}'s profile image"/>
  </div>
  `;
};
