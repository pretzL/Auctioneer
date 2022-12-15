/**
 * Sort passed in array by listing end time, alphabetically, desc
 * @param {array} array
 * @returns a sorted array
 * @example
 * ```js
 * const sortedArray = sortEndsAtDesc(resultsArray);
 * // Expect array contents to be sorted by ending time, descending
 * ```
 */
export function sortEndsAtDesc(array) {
  const sortedArray = array.sort(function (a, b) {
    const timeA = a.endsAt;
    const timeB = b.endsAt;
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
 * Sort passed in array by listing end time, alphabetically, asc
 * @param {array} array
 * @returns a sorted array
 * @example
 * ```js
 * const sortedArray = sortEndsAtDesc(resultsArray);
 * // Expect array contents to be sorted by ending time, ascending
 * ```
 */
export function sortEndsAtAsc(array) {
  const sortedArray = array.sort(function (a, b) {
    const timeA = a.endsAt;
    const timeB = b.endsAt;
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
