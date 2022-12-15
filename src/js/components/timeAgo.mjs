// Load dayjs and dependencies
dayjs().format();
dayjs.extend(window.dayjs_plugin_relativeTime);

// Input date and return time since
/**
 * Takes in a date in ISO string format and checks it against today's date using the dayjs library
 * @param {string} date
 * @returns days between two dates in the format "x time ago"
 * @example
 * ```js
 * timeAgo("2022-09-04T08:08:38.830Z")
 * // Expect return string "15 hours ago"
 * ```
 */
export function timeAgo(date) {
  const timeFrom = dayjs().to(dayjs(date));
  return timeFrom;
}
