/**
 * A function for error handling. The message parameter should be the error message given by the browser/API
 * @param {string} message the error message to be displayed
 * @returns a container used to display the error in the DOM
 * @example
 * ```js
 * errorMessage("Body/media does not match format uri")
 * // Expect an annoyingly open-ended error message to be displayed in your DOM.
 */
export function errorMessage(message = "Unknown error") {
  return `<div class="error">${message}</div>`;
}
