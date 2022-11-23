// Check if email is a valid noroff email
/**
 * Check if email is a valid noroff email
 * @param {string} email
 * @returns boolean
 * @example
 * ```js
 * validateEmail("eriPre@stud.noroff.no")
 * // Expect return true
 * ```
 */
export function validateEmail(email) {
  const regEx = /[\w\-\.]+@(stud\.?noroff)\.no/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
