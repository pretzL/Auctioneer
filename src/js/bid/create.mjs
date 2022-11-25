import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import * as storage from "../storage/index.mjs";
import { API_BASE_URL, API_LISTINGS_URL } from "../util/variables.mjs";

/**
 * Function which initiates what to do when submitting the form
 * @param {element} form
 * @example
 * ```js
 * createComment(commentsForm);
 * // Expect a comment to be created using the form input fields provided in the commentsForm element, if it is a form.
 * ```
 */
export async function createBid(evt) {
  evt.preventDefault();

  // Grab error container
  const errorContainer = document.querySelector(".error-container");

  // Assign the inputs from the form to variables
  const [id, amount] = evt.target.elements;

  const amountNum = Number(amount.value);

  // Construct the data object which is to be sent to the API
  let dataObj = {
    amount: amountNum,
  };

  // Get the auth token
  const jwt = storage.load("jwt");

  // Send the data object to the API
  try {
    const response = await fetch(`${API_BASE_URL}${API_LISTINGS_URL}/${id.value}/bids`, {
      method: "POST",
      body: JSON.stringify(dataObj),
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    const json = await response.json();
    if (json.errors) {
      errorContainer.innerHTML = errorMessage(json.errors[0].message);
    } else {
      errorContainer.innerHTML = successMessage("Bid ");
      location.reload();
    }
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}