import { API_BASE_URL, API_LISTINGS_URL, editListingForm } from "../util/variables.mjs";
import * as storage from "../storage/index.mjs";
import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import { timeout } from "../util/timeout.mjs";
import { getQueryParams } from "../util/getQueryParams.mjs";

/**
 * Function which initiates what to do when submitting the form
 * @param {element} data current values of the listing to edit
 * @example
 * ```js
 * getListingToEdit(listingData);
 * // Expect a modal to open with inputs pre-filled with the current listing information
 * ```
 */
export function getListingToEdit(data) {
  // Assign the inputs from the form to variables
  const [title, desc, tags, endsAt] = editListingForm.elements;

  // Set input values
  title.value = data.title;
  desc.value = data.description;
  tags.value = data.tags;
  endsAt.value = data.endsAt;
  endsAt.disabled = true;

  // Grab media gallery
  const mediaGallery = editListingForm.querySelectorAll(`input[data-type="url"]`);

  // Set the input values for each media gallery
  for (let i = 0; i < data.media.length; i++) {
    if (mediaGallery[i].value === "") {
      mediaGallery[i].value = data.media[i];
      mediaGallery[i].classList.remove("hidden");
      mediaGallery[i].disabled = false;
    }
  }
}

/**
 * Function which initiates what to do when submitting the form
 * @param {element} evt edit listing form
 * @example
 * ```js
 * editListing(editListingForm);
 * // Expect the changed inputs to be sent to the API
 * ```
 */
export async function editListing(evt) {
  evt.preventDefault();

  // Grab error container
  const errorContainer = evt.target.querySelector(".error-container");

  // Assign the inputs from the form to variables
  const [title, desc, tags, endsAt] = evt.target.elements;

  // Grab media gallery
  const mediaGallery = evt.target.querySelectorAll(`input[data-type="url"]:enabled`);

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

  // Get listing ID
  const id = getQueryParams("id");

  // Get the auth token
  const jwt = storage.load("jwt");

  // Send the data object to the API
  try {
    const response = await fetch(`${API_BASE_URL}${API_LISTINGS_URL}/${id}`, {
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
      errorContainer.innerHTML = successMessage("Edit");
      await timeout(1500);
      location.reload();
    }
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("Oops, something went wrong... " + error);
  }
}
