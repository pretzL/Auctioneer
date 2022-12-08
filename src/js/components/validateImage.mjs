/**
 * Check if img is a valid image
 * @param {string} img
 * @returns image
 * @example
 * ```js
 * validateImage(imgURL)
 * // Expect return either the passed in image if it is valid or a placeholder image if it is not valid
 * ```
 */
export function validateImage(img) {
  let image;

  if (img !== "" && img) {
    image = img;
  } else {
    image = "https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png";
  }
  return image;
}
