import { search } from "../query/search.mjs";
import { cardHTML } from "../templates/card.mjs";
import { cardsContainer, errorContainer } from "../util/variables.mjs";
import { getListings } from "../listings/read.mjs";
import { options } from "../util/options.mjs";
import { API_BASE_URL, API_LISTINGS_URL, listingsParams } from "../util/variables.mjs";
import { observer } from "../components/infiniteScroll.mjs";
import { errorMessage } from "../components/error.mjs";

/**
 * Builds the listings page using the query string set by the user
 * @param {string} query the keyword to filter results by
 * @example
 * ```js
 * buildListings("mike")
 * // Expect page to be built using data related to "mike"
 * ```
 */
export async function buildListings(query) {
  try {
    const data = await getListings(`${API_BASE_URL}${API_LISTINGS_URL}${listingsParams}`, options);
    const result = await search(data, query);

    cardsContainer.innerHTML = "";

    for (let i = 0; i < result.length; i++) {
      if (i === 9) {
        break;
      }
      cardsContainer.innerHTML += cardHTML(result[i]);
    }

    observer(result);
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
