import { validateAvatar } from "../components/validateAvatar.mjs";

export const buildSellerInfo = (data) => {
  const avatar = validateAvatar(data.seller.avatar);

  return `
    <a href="./profile.html?name=${data.seller.name}" class="max-w-sm flex gap-4 items-center">
      <img src="${avatar}" class="rounded-full w-24 h-24 object-cover object-center" alt="${data.seller.name}'s profile image" onerror='this.src="https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png"'/>
      <div id="seller-info-text" class="flex flex-col gap-2">
        <h3 class="text-lg font-semibold">${data.seller.name}</h3>
        <p class="text-xs lg:text-base">${data.seller.email}</p>
        <p>Wins: ${data.seller.wins.length}</p>
      </div>
    </a>
    `;
};
