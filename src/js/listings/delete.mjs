import * as storage from "../storage/index.mjs";
import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import { timeout } from "../util/timeout.mjs";
import { API_BASE_URL, API_LISTINGS_URL, deleteListingModalContent } from "../util/variables.mjs";
import { getQueryParams } from "../util/getQueryParams.mjs";

/**
 * Function which initiates what to do when submitting the form
 * @example
 * ```js
 * deleteListings();
 * // Expect listing where the function is initialized to be deleted
 * ```
 */
export async function deleteListing() {
  // Grab error container
  const errorContainer = deleteListingModalContent.querySelector(".error-container");

  // Get listing ID
  const id = getQueryParams("id");

  // Get the auth token
  const jwt = storage.load("jwt");

  // Send the data object to the API
  try {
    const response = await fetch(`${API_BASE_URL}${API_LISTINGS_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    errorContainer.innerHTML = successMessage("Delete");
    await timeout(3000);
    location.href = "./index.html";
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
