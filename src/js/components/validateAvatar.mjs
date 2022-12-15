/**
 * Check if avatar is a valid image
 * @param {string} avatar
 * @returns image
 * @example
 * ```js
 * validateAvatar(avatarURL)
 * // Expect return either the passed in image if it is valid or a placeholder image if it is not valid
 * ```
 */
export function validateAvatar(avatar) {
  let userAvatar;
  if (avatar !== "" && avatar) {
    userAvatar = avatar;
  } else {
    userAvatar = "https://cdn.discordapp.com/attachments/931268688412299274/1026475050578231376/no-user-image-icon-0.jpg";
  }
  return userAvatar;
}
