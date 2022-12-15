/**
 * Sort passed in array by amount, alphabetically, desc
 * @param {array} array
 * @returns a sorted array
 * @example
 * ```js
 * const sortedArray = sortAmountDesc(resultsArray);
 * // Expect array contents to be sorted by amount posted, descending
 * ```
 */
export function sortAmountDesc(array) {
  const sortedArray = array.sort(function (a, b) {
    const amountA = a.amount.toLowerCase();
    const amountB = b.amount.toLowerCase();
    if (amountA <= amountB) {
      return -1;
    }
    if (amountA >= amountB) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
}

/**
 * Sort passed in array by amount, alphabetically, asc
 * @param {array} array
 * @returns a sorted array
 * @example
 * ```js
 * const sortedArray = sortAmountDesc(resultsArray);
 * // Expect array contents to be sorted by amount posted, ascending
 * ```
 */
export function sortAmountAsc(array) {
  const sortedArray = array.sort(function (a, b) {
    const amountA = a.amount;
    const amountB = b.amount;
    if (amountA >= amountB) {
      return -1;
    }
    if (amountA <= amountB) {
      return 1;
    }
    return 0;
  });
  return sortedArray;
}
