import { search } from "../query/search.mjs";
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
    const data = await getListings(`${API_BASE_URL}${API_LISTINGS_URL}${listingsParams}`, options);
    result.push(...data);
    const data2 = await getListings(`${API_BASE_URL}${API_LISTINGS_URL}${listingsParams}&offset=100`, options);
    result.push(...data2);

    cardsContainer.innerHTML = "";

    if (query) {
      if (query !== "all") {
        result = await search(result, query);

        if (result.length <= 0) {
          errorContainer.innerHTML = errorMessage("Your search didn't return anything... Try searching for something else!");
        } else {
          loopCardData(result, 9);

          observer(result);

          addSortListener(result);
        }
      } else {
        loopCardData(result, 9);

        observer(result);

        addSortListener(result);
      }
    } else {
      location.href = "./index.html";
    }
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("Oops, something went wrong... " + error);
  }
}
