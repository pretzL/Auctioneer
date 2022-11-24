import * as storage from "../storage/index.mjs";

/**
 * Function which clears localStorage upon log out.
 * @example
 * ```js
 * logout();
 * // Call the function in order to clear localStorage completely and redirect to login
 * ```
 */
export function logout() {
  storage.remove("user");
  storage.remove("jwt");

  location.href = "./index.html";
}
