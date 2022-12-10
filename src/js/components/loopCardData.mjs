import { cardHTML } from "../templates/card.mjs";
import { cardsContainer } from "../util/variables.mjs";

/**
 * Simple function to loop data which is passed in as a parameter and then create HTML for it
 * @param {array} data data to loop
 * @param {number} num number to break by
 * @example
 * ```js
 * loopCardData(apiData, 9);
 * // Expect the passed in data to be looped based on the length of the passed in data and then create HTML based on it, but break when num is reached
 * ```
 */
export function loopCardData(data, num) {
  for (let i = 0; i < data.length; i++) {
    if (num) {
      if (i === num) {
        break;
      }
    }
    cardsContainer.innerHTML += cardHTML(data[i]);
  }
}
