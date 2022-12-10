import { errorMessage } from "../components/error.mjs";
import { errorContainer } from "../util/variables.mjs";

/**
 * Simple API fetch which returns the fetched data
 * @param {string} url url to fetch from
 * @param {object} opt options to append to the fetch, such as auth token, headers etc.
 * @returns data from API
 * @example
 * ```js
 * getListings("https://nf-api.onrender.com/api/v1/auction/listings", {
 *    method: "GET",
 *    headers: {
 *      Authorization: `Bearer ${jwt}`,
 *    },
 * };)
 * // Expect returned array with data from API
 * ```
 */
export async function getListings(url, opt) {
  try {
    const response = await fetch(url, opt);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("Oops, something went wrong... " + error);
  }
}

/**
 * Simple API fetch which returns the fetched data, filtered by the passed in value
 * @param {string} url url to fetch from
 * @param {object} opt options to append to the fetch, such as auth token, headers etc.
 * @param {string} value value to filter by
 * @returns data from API, filtered
 * @example
 * ```js
 * getSuggested("https://nf-api.onrender.com/api/v1/auction/listings", {
 *    method: "GET",
 *    headers: {
 *      Authorization: `Bearer ${jwt}`,
 *    },
 * }, "test");
 * // Expect returned array with data from API, matching value "test"
 * ```
 */
export async function getSuggested(url, opt, value) {
  try {
    const data = await getListings(url, opt);

    const filtered = data.filter((listing) => {
      let desc;
      if (listing.description) {
        desc = listing.description.toLowerCase().includes(value.toLowerCase());
      }
      return listing.seller.name.toLowerCase().includes(value.toLowerCase()) || listing.title.toLowerCase().includes(value.toLowerCase()) || desc;
    });
    return filtered;
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("Oops, something went wrong... " + error);
  }
}
