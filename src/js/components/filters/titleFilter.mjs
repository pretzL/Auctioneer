/**
 * Sort passed in array by title, alphabetically, desc
 * @param {array} array
 * @returns a sorted array
 * @example
 * ```js
 * const sortedArray = sortTitleDesc(resultsArray);
 * // Expect array contents to be sorted by title posted, descending
 * ```
 */
export function sortTitleDesc(array) {
  const sortedArray = array.sort(function (a, b) {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA <= titleB) {
      return -1;
    }
    if (titleA >= titleB) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
}

/**
 * Sort passed in array by title, alphabetically, asc
 * @param {array} array
 * @returns a sorted array
 * @example
 * ```js
 * const sortedArray = sortTitleAsc(resultsArray);
 * // Expect array contents to be sorted by title posted, ascending
 * ```
 */
export function sortTitleAsc(array) {
  const sortedArray = array.sort(function (a, b) {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA >= titleB) {
      return -1;
    }
    if (titleA <= titleB) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
}
