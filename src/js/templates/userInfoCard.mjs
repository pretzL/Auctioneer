import { userInfo } from "../util/variables.mjs";

export const userInfoCard = (data) => {
  let avatar = `
    <label class="flex flex-col w-24 h-24 md:w-32 md:h-32">
      <img id="edit-profile-media" src="${data.avatar}" class="rounded-full w-full h-full self-end object-cover object-center" alt="${data.name}'s profile image" onerror='this.src="https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png"'/>
    </label>
  `;

  let credits = "";

  if (data.name === userInfo.name) {
    credits = `<p>Credits: ${data.credits}</p>`;
    avatar = `
    <label for="edit-media-modal" class="tooltip flex flex-col w-24 h-24 md:w-32 md:h-32 rounded-full cursor-pointer" data-tip="Click to edit">
      <img id="edit-profile-media" src="${data.avatar}" class="rounded-full w-full h-full self-end object-cover object-center" alt="${data.name}'s profile image" onerror='this.src="https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png"'/>
    </label>
    `;
  }

  return `
  <div id="info-text" class="w-full">
    <div class="w-full flex flex-col gap-4">
      <h2 class="font-bold mb-4 text-lg">${data.name}</h2>
      <p class="text-xs lg:text-base">${data.email}</p>
      ${credits}
      <p>Listings: ${data._count.listings}</p>
    </div>
  </div>
  <div class="w-full h-full flex justify-end">
    ${avatar}
  </div>
  `;
};
