export function validateAvatar(avatar) {
  let userAvatar;
  if (avatar.value !== "" && avatar.value) {
    userAvatar = avatar.value;
  } else {
    userAvatar = "https://cdn.discordapp.com/attachments/931268688412299274/1026475050578231376/no-user-image-icon-0.jpg";
  }
  return userAvatar;
}
