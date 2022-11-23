// From Oliver Dipple
/**
 * Sets a new cooldown promise in ms
 * @param {number} ms the number of milliseconds to set a timer for
 * @example
 * ```js
 * cooldown(1000)
 * // Sets a resolve timer for 1 second
 * ```
 */
function cooldown(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

/**
 * Create a new timeout before reloading the page
 * @param {number} time the number of milliseconds to set a timer for
 * @example
 * ```js
 * timeout(1000)
 * // Creates a cooldown for 1 second before refreshing the page
 * ```
 */
export async function timeout(time) {
  await cooldown(time);
  location.reload();
}
