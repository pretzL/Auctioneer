import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import * as storage from "../storage/index.mjs";
import { timeout } from "../util/timeout.mjs";
import { API_BASE_URL, API_LISTINGS_URL } from "../util/variables.mjs";

/**
 * Function which initiates what to do when submitting the form
 * @param {element} form
 * @example
 * ```js
 * createListing(listingForm);
 * // Expect a listing to be created using the form input fields provided in the postForm element, if it is a form.
 * ```
 */
export async function createListing(evt) {
  evt.preventDefault();

  // Grab error container
  const errorContainer = evt.target.querySelector(".error-container");

  // Assign the inputs from the form to variables
  const [title, desc, tags, endsAt] = evt.target.elements;

  // Grab media gallery
  const mediaGallery = document.querySelectorAll(`input[data-type="url"]:enabled`);

  let media = [];
  mediaGallery.forEach((input) => {
    if (input.value !== "") {
      media.push(input.value);
    }
  });

  // Remove whitespace from tags input and split them at commas
  const pushedTags = tags.value.replace(/\s+/g, "").split(",");

  // Construct the data object which is to be sent to the API
  let dataObj = {
    title: `${title.value}`,
    description: `${desc.value}`,
    tags: pushedTags,
    media: media,
    endsAt: `${endsAt.value}`,
  };

  if (!media || media === [] || media === "") {
    delete dataObj.media;
  }

  // Get the auth token
  const jwt = storage.load("jwt");

  // Send the data object to the API
  try {
    const response = await fetch(`${API_BASE_URL}${API_LISTINGS_URL}`, {
      method: "POST",
      body: JSON.stringify(dataObj),
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    const json = await response.json();

    if (json.errors) {
      errorContainer.innerHTML = errorMessage(`Error ${json.statusCode}, ${json.status}: ${json.errors[0].message}`);
    } else {
      errorContainer.innerHTML = successMessage("Creation");
      await timeout(1500);
      location.reload();
    }
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
