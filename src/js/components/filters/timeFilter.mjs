/**
 * Sort passed in array by time, alphabetically, desc
 * @param {array} array
 * @returns a sorted array
 * @example
 * ```js
 * const sortedArray = sortTimeDesc(resultsArray);
 * // Expect array contents to be sorted by time posted, descending
 * ```
 */
export function sortTimeDesc(array) {
  const sortedArray = array.sort(function (a, b) {
    const timeA = a.updated.toLowerCase();
    const timeB = b.updated.toLowerCase();
    if (timeA <= timeB) {
      return -1;
    }
    if (timeA >= timeB) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
}

/**
 * Sort passed in array by time, alphabetically, asc
 * @param {array} array
 * @returns a sorted array
 * @example
 * ```js
 * const sortedArray = sortTimeDesc(resultsArray);
 * // Expect array contents to be sorted by time posted, ascending
 * ```
 */
export function sortTimeAsc(array) {
  const sortedArray = array.sort(function (a, b) {
    const timeA = a.updated.toLowerCase();
    const timeB = b.updated.toLowerCase();
    if (timeA >= timeB) {
      return -1;
    }
    if (timeA <= timeB) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
}
