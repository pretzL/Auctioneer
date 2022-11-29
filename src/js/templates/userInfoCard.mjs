export const userInfoCard = (data) => {
  return `
  <div id="info-text" class="w-full">
    <div class="w-full flex flex-col gap-4">
      <h1 class="font-bold mb-4 text-lg">${data.name}</h1>
      <p>${data.email}</p>
      <p>Credits: ${data.credits}</p>
      <p>Listings: ${data._count.listings}</p>
    </div>
  </div>
  <div>
    <label for="edit-media-modal" class="tooltip flex flex-col w-32 h-32 btn btn-ghost btn-circle" data-tip="Click to edit">
      <img id="edit-profile-media" src="${data.avatar}" class="rounded-full w-32 h-32 self-end object-cover object-center" alt="${data.name}'s profile image"/>
    </label>
  </div>
  `;
};
