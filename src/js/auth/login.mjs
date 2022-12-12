import { API_BASE_URL, API_LOGIN_URL } from "../util/variables.mjs";
import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import { timeout } from "../util/timeout.mjs";
import * as storage from "../storage/index.mjs";

/**
 * Function which initiates what to do when submitting the form
 * @param {element} evt
 * @example
 * ```js
 * handleLogin(loginForm);
 * // Expect the input user information to be sent to the API for validation. If OK, the user will be logged in. If not, an error will display.
 * ```
 */
export async function login(evt) {
  evt.preventDefault();

  // Grab error container
  const errorContainer = evt.target.querySelector(".error-container");

  // Assign the inputs from the form to variables
  const [email, password] = evt.target.elements;

  // Construct the data object which is to be sent to the API
  const dataObj = JSON.stringify({
    email: email.value,
    password: password.value,
  });

  // Send the data object to the API
  try {
    const response = await fetch(`${API_BASE_URL}${API_LOGIN_URL}`, {
      method: "POST",
      body: dataObj,
      headers: {
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
      errorContainer.style.display = "none";
      errorContainer.innerHTML = successMessage("Login");

      // Save user info
      storage.save("user", {
        name: json.name,
        email: json.email,
        avatar: json.avatar,
        credits: json.credits,
      });

      // Save an empty array for favorites
      storage.save("favorites", []);

      // Save authentication token
      storage.save("jwt", json.accessToken);

      // Redirect
      await timeout(1500);
      location.href = "./profile.html";
    }
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("Oops, something went wrong... " + error);
  }
}
