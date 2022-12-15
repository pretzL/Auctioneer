import { errorMessage } from "../components/error.mjs";
import { options } from "../util/options.mjs";
import { API_BASE_URL, API_PROFILE_URL, errorContainer, profileParams } from "../util/variables.mjs";

/**
 * Fetch profile data from API
 * @param {string} name username to get
 * @param {string} type type of fetch to do
 * @return object
 * @example
 * ```js
 * getProfile("mike", "/bids")
 * // Expect returned API object to include the bids of "mike"
 * ```
 */
export async function getProfile(name, type) {
  try {
    const response = await fetch(`${API_BASE_URL}${API_PROFILE_URL}/${name}${type}${profileParams}`, options);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("Oops, something went wrong... " + error);
  }
}
