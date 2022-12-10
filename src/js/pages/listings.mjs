import { search } from "../query/search.mjs";
import { cardHTML } from "../templates/card.mjs";
import { cardsContainer, errorContainer } from "../util/variables.mjs";
import { getListings } from "../listings/read.mjs";
import { options } from "../util/options.mjs";
import { API_BASE_URL, API_LISTINGS_URL, listingsParams } from "../util/variables.mjs";
import { observer } from "../components/infiniteScroll.mjs";
import { errorMessage } from "../components/error.mjs";
import { loopCardData } from "../components/loopCardData.mjs";
import { addSortListener } from "./index/sortListeners.mjs";

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
    let result = [];
    if (query) {
      if (query === "all") {
        const data = await getListings(`${API_BASE_URL}${API_LISTINGS_URL}${listingsParams}`, options);
        result.push(...data);
        const data2 = await getListings(`${API_BASE_URL}${API_LISTINGS_URL}${listingsParams}&offset=100`, options);
        result.push(...data2);
      } else {
        const data = await getListings(`${API_BASE_URL}${API_LISTINGS_URL}${listingsParams}`, options);
        result.push(await search(data, query));
      }
    } else {
      location.href = "./index.html";
    }

    cardsContainer.innerHTML = "";

    loopCardData(result, 9);

    observer(result);

    addSortListener(result);
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("Oops, something went wrong... " + error);
  }
}
