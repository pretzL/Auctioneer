/**
 * Function which simply checks if a checkbox is checked
 * @param {element} check
 * @returns boolean
 * @example
 * ```js
 * checkIfChecked(checkbox)
 * // Expect true or false based on if the checkbox is checked or not
 * ```
 */
export function checkIfChecked(check) {
  if ((check.checked = true)) {
    return true;
  } else {
    return false;
  }
}
