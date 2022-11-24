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
  return `
  <div class="alert alert-error shadow-lg">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>${message}</span>
    </div>
  </div>`;
}
