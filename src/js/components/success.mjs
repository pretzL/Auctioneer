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
  return `<div class="alert alert-success shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>${message} successful!</span>
  </div>
</div>`;
}
