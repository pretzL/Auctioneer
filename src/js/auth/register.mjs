import { API_BASE_URL, API_REGISTER_URL, loginCheck, registerCheck } from "../util/variables.mjs";
import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import { validateEmail } from "../components/validateEmail.mjs";
import { timeout } from "../util/timeout.mjs";
import { validateAvatar } from "../components/validateAvatar.mjs";

/**
 * Function which initiates what to do when submitting the form
 * @param {element} evt
 * @example
 * ```js
 * handleRegister(registerForm);
 * // Expect the input user information to be sent to the API for validation. If OK, the user will be registered. If not, an error will display.
 * ```
 */
export async function register(evt) {
  evt.preventDefault();

  // Grab error container
  const errorContainer = evt.target.querySelector(".error-container");

  // Assign the inputs from the form to variables
  const [userName, email, password, avatar] = evt.target.elements;

  let validatedEmail = "";

  if (!validateEmail(email.value)) {
    errorContainer.innerHTML = errorMessage("Invalid email");
  } else {
    errorContainer.innerHTML = "";
    validatedEmail = email.value;

    // Validate the avatar field
    const userAvatar = validateAvatar(avatar);

    // Construct the data object which is to be sent to the API
    const dataObj = JSON.stringify({
      name: userName.value,
      email: validatedEmail,
      password: password.value,
      avatar: userAvatar,
    });

    // Send the data object to the API
    try {
      const response = await fetch(`${API_BASE_URL}${API_REGISTER_URL}`, {
        method: "POST",
        body: dataObj,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });

      const json = await response.json();

      if (json.errors) {
        errorContainer.innerHTML = errorMessage(`Error ${json.statusCode}, ${json.status}: ${json.errors[0].message}`);
      } else {
        errorContainer.innerHTML = successMessage("Registration");
        timeout(3000);
        registerCheck.checked = false;
        loginCheck.checked = true;
      }
    } catch (error) {
      console.log(error);
      errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
    }
  }
}
