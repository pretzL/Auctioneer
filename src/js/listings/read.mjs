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
  // GET API DATA
  const response = await fetch(url, opt);
  const data = await response.json();
  return data;
}
