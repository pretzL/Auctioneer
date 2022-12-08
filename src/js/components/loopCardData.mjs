import { cardHTML } from "../templates/card.mjs";
import { cardsContainer } from "../util/variables.mjs";

/**
 * Simple function to loop data which is passed in as a parameter and then create HTML for it
 * @param {array} data
 * @example
 * ```js
 * loopCardData(apiData);
 * // Expect the passed in data to be looped based on the length of the passed in data and then create HTML based on it
 * ```
 */
export function loopCardData(data) {
  for (let i = 0; i < data.length; i++) {
    cardsContainer.innerHTML += cardHTML(data[i]);
  }
}
