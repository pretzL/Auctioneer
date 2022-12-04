// From https://stackoverflow.com/questions/5210376/how-to-get-first-and-last-day-of-the-current-week-in-javascript
const curr = new Date(); // get current date
const first = curr.getDate(); // First day is the day of the month
const last = first - curr.getDay() - 30; // getting last 30 days because that's the average length of a month throughout the year

// Convert to ISO strings since the API requires that
const firstDay = new Date(curr.setDate(first)).toISOString();
const lastDay = new Date(curr.setDate(last)).toISOString();

/**
 * Sort passed in array if post was posted this month, checks using values pre-set above the function
 * @param {array} array
 * @returns a sorted array
 * @example
 * ```js
 * const sortedArray = sortMonth(resultsArray);
 * // Expect array contents to now only contain posts created this month
 * ```
 */
export function sortMonth(array) {
  const sortedArray = array.filter((item) => {
    if (item.updated < firstDay && item.updated > lastDay) {
      return true;
    } else {
      return false;
    }
  });
  return sortedArray;
}
