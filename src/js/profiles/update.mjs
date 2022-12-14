import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import * as storage from "../storage/index.mjs";
import { timeout } from "../util/timeout.mjs";
import { API_BASE_URL, API_PROFILE_URL, userInfo } from "../util/variables.mjs";

/**
 * Function which initiates what to do when submitting the form
 * @param {element} evt form to get img from
 * @example
 * ```js
 * updateProfile(form)
 * // Expect the function to change the "avatar" value to the media URL provided in the form element
 * ```
 */
export async function updateProfile(evt) {
  evt.preventDefault();

  // Grab error container
  const errorContainer = evt.target.querySelector(".error-container");

  // Grab form elements
  const [img] = evt.target.elements;

  // Get the auth token
  const jwt = storage.load("jwt");

  // Construct the data object which is to be sent to the API
  let dataObj = {
    avatar: `${img.value}`,
  };
  try {
    // Send the data object to the API
    const response = await fetch(`${API_BASE_URL}${API_PROFILE_URL}/${userInfo.name}/media`, {
      method: "PUT",
      body: JSON.stringify(dataObj),
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    const json = await response.json();

    if (json.errors) {
      let message;
      if (json.errors[0].message) {
        message = json.errors[0].message;
      } else {
        message = json.errors[0].code;
      }
      errorContainer.innerHTML = errorMessage(`Error ${json.statusCode}, ${json.status}: ${message}`);
    } else {
      errorContainer.innerHTML = successMessage("Profile media edit");
      await timeout(1500);
      location.reload();
    }
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("Oops, something went wrong... " + error);
  }
}
