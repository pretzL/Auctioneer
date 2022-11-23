/**
 * A function for success handling. The message parameter should be the success message given by the browser/API, or a default message
 * @param {string} message the success message to be displayed
 * @returns a container used to display the success message in the DOM
 * @example
 * ```js
 * successMessage("Post creation")
 * // Returns "Post creation successful!" in a container in your DOM.
 * ```
 */
export function successMessage(message = "Action") {
  return `<div class="success">${message} successful!</div>`;
}
