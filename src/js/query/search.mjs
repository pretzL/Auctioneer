/**
 * Handles the page's search function. The value argument is the search field input which is then checked against the results from the API to find matches.
 * @param {string} data data to search through
 * @param {string} value search field input
 * @example
 * ```js
 * search(apiResult, test)
 * // Expect return to show every post which has the string "test" in it somewhere
 * ```
 */
export async function search(data, value) {
  const filtered = data.filter((listing) => {
    let desc;
    if (listing.description) {
      desc = listing.description.toLowerCase().includes(value.toLowerCase());
    }
    return listing.seller.name.toLowerCase().includes(value.toLowerCase()) || listing.title.toLowerCase().includes(value.toLowerCase()) || desc;
  });
  return filtered;
}
