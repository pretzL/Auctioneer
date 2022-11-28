import * as storage from "../storage/index.mjs";
import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import { timeout } from "../util/timeout.mjs";
import { API_BASE_URL, API_LISTINGS_URL, deleteListingModalContent } from "../util/variables.mjs";

export async function deleteListing(evt) {
  // Grab error container
  const errorContainer = deleteListingModalContent.querySelector(".error-container");

  // Get listing ID
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

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

    errorContainer.innerHTML = successMessage("Edit");
    timeout(3000);
    location.href = "./index.html";
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
